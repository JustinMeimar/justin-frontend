import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import "./css/BaseBlog.css";

const RenderMarkdown = (content) => {
	const [markdown, setMarkdown] = useState('')

  console.log();
	useEffect(() => {
		fetch(content).then(res => res.text()).then(text => setMarkdown(text))
	})
	
	return (
		<div>
			<ReactMarkdown children={markdown} />
    </div>
	)
}

const BaseBlog = ({ content }) => (
  <div>
    <div className="persistent_blog_title">
      {/* Justin's Blog */}
    </div>
    <div className="base_blog_container"> 
      <div className="base_blog_content">
          { RenderMarkdown(content) }
      </div>
    </div>
  </div>
);

export default BaseBlog;