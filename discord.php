<?php

/**
 * Plugin Name:       Server Block for Discord
 * Description:       A Discord server block for the WordPress block editor.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Clever & Kind Co.
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ck-server-block-discord
 */

namespace cleverkindco\Server_Block_Discord;

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function discord_server_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'discord_server_block_init');
