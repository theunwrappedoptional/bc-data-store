/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
// eslint-disable-next-line no-unused-vars
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	const title = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'title' );
	} );

	const { editPost } = useDispatch( 'core/editor' );

	return (
		<div { ...useBlockProps() }>
			<h2>{ title }</h2>
			<input
				value={ title }
				onChange={ ( e ) => editPost( { title: e.target.value } ) }
			/>
		</div>
	);
}
