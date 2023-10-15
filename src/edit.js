/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, HeightControl } from '@wordpress/block-editor';

import { TextControl, RadioControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import metadata from './block.json';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( props ) {
	const { attributes, setAttributes, } = props;
	// not sure if I'm supposed to use attributes to manage state; leaving this here in case I'm doing it wrong
	// const [ serverId, setServerId ] = useState( attributes.discord_server_id );

	const onChangeServerId = (value) => {
		// setServerId( value );
		setAttributes( {discord_server_id: value }); 
}

	return (
		<div { ...useBlockProps() }>
			<p>
				{ __( 'Discord - hello from the editor!', 'discord' ) }
			</p>
			<TextControl 
				label={__("Discord Server ID", metadata.textdomain)}
				value={attributes.discord_server_id}
				onChange={ onChangeServerId }
			/>
			<RadioControl
				label={__("Color Mode", metadata.textdomain)}
				selected={ attributes.color_mode }
				options={ [
					{ label: 'Dark', value:'dark' },
					{ label: 'Light', value: 'light' },
				] }
				onChange={ (value) => setAttributes( {color_mode: value} ) }
			/>
			<HeightControl
				value={ attributes.height }
				onChange={ (value) => setAttributes( {height: value} ) }
			/>
			<HeightControl
				label='Width'
				value={ attributes.width }
				onChange={ (value) => setAttributes( {width: value} ) }
			/>
		</div>
	);
}
