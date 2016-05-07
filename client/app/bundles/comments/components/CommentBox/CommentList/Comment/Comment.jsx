import React, { PropTypes } from 'react';
import marked from 'marked';
import classNames from 'classnames';

import css from './Comment.scss';
import BaseComponent from 'libs/components/BaseComponent';

export default class Comment extends BaseComponent {
  static propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    liked: PropTypes.boolean,
  };

  render() {
    const { author, text, liked } = this.props;
    const rawMarkup = marked(text, { gfm: true, sanitize: true });

    let className = classNames(css.comment, { [`${css.comment__liked}`]: liked });

    return (
      <div className={className}>
        <h2 className={`${css.commentAuthor} js-comment-author`}>
          {author}
        </h2>
        <span
          dangerouslySetInnerHTML={{ __html: rawMarkup }}
          className="js-comment-text"
        />
      </div>
    );
  }
}
