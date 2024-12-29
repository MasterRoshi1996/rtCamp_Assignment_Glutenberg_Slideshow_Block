import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

registerBlockType('gutenberg-slideshow/block', {
    edit: ({ attributes, setAttributes }) => {
        const [posts, setPosts] = useState([]);
        const [loading, setLoading] = useState(false);
        const blockProps = useBlockProps();

        useEffect(() => {
            setLoading(true);
            fetch(`${attributes.siteURL}/wp-json/wp/v2/posts?per_page=5`)
                .then((res) => res.json())
                .then((data) => {
                    setPosts(data);
                    setLoading(false);
                });
        }, [attributes.siteURL]);

        return (
            <div {...blockProps}>
                <InspectorControls>
                    <PanelBody title="Settings">
                        <TextControl
                            label="Site URL"
                            value={attributes.siteURL}
                            onChange={(url) => setAttributes({ siteURL: url })}
                        />
                        <ToggleControl
                            label="Auto-scroll"
                            checked={attributes.autoScroll}
                            onChange={(value) => setAttributes({ autoScroll: value })}
                        />
                    </PanelBody>
                </InspectorControls>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="slideshow">
                        {posts.map((post) => (
                            <div className="slide" key={post.id}>
                                <img src={post.featured_image_src} alt={post.title.rendered} />
                                <h3>
                                    <a href={post.link}>{post.title.rendered}</a>
                                </h3>
                                <p>{new Date(post.date).toLocaleDateString()}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    },
    save: () => {
        return null; // Rendered dynamically on the server
    },
});
