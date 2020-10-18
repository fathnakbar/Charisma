var _track = {}; // Tracking elments data
var _map = {"post_interact":"http://"} // Map for request to server (request map to the server)

class PostWriteContent extends React.commponent {
    constructor(props){
        super(props)
        // this.state = {};
        // this.setState();
    }

    render(){
        {/* 
            data: post (metadata for post)
                  content
                  username
                  date (date)
                  count {likes:... , comments: ... , share:...}
                  links {"Link title": http://...}
                  reviewComment {id: {content: ... , username: ... , nested: }}

        */}

        var link_tag = [];
        var review = [];
        var date = `` ; // calculate the date to count how many days or month 

        
        for (const key in this.props.reviewComment) {
            if (reviewComment.hasOwnProperty(key)) {
                const comment = this.props.reviewComment[key];
                let a = <div className="row"><span><b>{comment[username]}</b> reviewComment[content]</span></div>;
                review.append(a);
            }
        }

        for (const key in this.props.links) {
            if (this.props.links.hasOwnProperty(key)) {
                link_tag.append(<a className="t-info" href={this.props.links[key]}>{key}<img src="/res/link.svg" alt="" /></a>);
            }
        }
    return (
            <div className="journal-post team">
            <img src="/res/kristo.jpg" alt="" className="user-prof" />
            <div className="row">
                <span className="username">{this.props.username}</span>
                <div className="sec">{date}</div>
            </div>
            <div className="opt">
                <li />
                <li style={{margin: '3px 0'}} />
                <li />
            </div>
            <div className="post">
                <p className="des">{this.props.content}</p>
            </div>
            <div className="footer">
                {/* Tags use for links */}
                <div className="tags row">
                    {link_tag}
                </div>
                <div className="row grp-btn">
                    <li><a href={`${_map.post_interaction}/${this.props.id}/like`}><img src="/res/like.svg" alt="" />{this.props.count.likes}</a></li>
                    <li className="margins"><a href={`${_map.post_interaction}/${this.props.id}/comment`}><img src="/res/comment.svg" alt="" />{this.props.count.comments}</a></li>
                    <li><a href={`${_map.post_interaction}/${this.props.id}/share`}><img src="/res/share.svg" alt="" />{this.props.count.share}</a></li>
                </div>
                <div className="review">
                    {review}
                </div>
            </div>
            </div>
  );
    }
}