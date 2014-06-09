define( function ( require, exports, module )
{
	'use strict';

	var Extensions = require( 'ft/core/extensions' ).Extensions,
		eachSpan;

	Extensions.add( 'com.foldingtext.editor.renderNodeElementStyles', function ( editor, node, elementRenderer )
	{
		if( eachSpan = elementRenderer._element.firstElementChild.firstElementChild ) {

			while( eachSpan )
			{
				if( eachSpan.classList.contains( 'cm-keyword' ) && eachSpan.textContent === '@' ) {
					var atSpan  = eachSpan,
						tagSpan = eachSpan.nextElementSibling,
						tagName = tagSpan.textContent;
					atSpan.classList.add( 'tag-' + tagName );
					tagSpan.classList.add( 'tag-' + tagName );
					eachSpan = tagSpan;
				}
				eachSpan = eachSpan.nextElementSibling;
			}
		}
	});
});
