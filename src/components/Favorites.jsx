import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';

class Favorites extends Component {

    render() {
        return(
            <section>
            {
                this.props.favorites !== undefined
                ? (
                    <div>
                    {
                        this.props.favorites.map(post => (
                        <Post 
                            key={post.id}
                            {...post}
                        />
                        ))
                    }
                    <button onClick={() => this.getMorePost(this.props.data.pagination.next_url)}>See more</button>
                    </div>
                )
                : <h2>No hay publicaciones disponibles</h2>
          
            }
            </section>
        )
    }
}

const mapStateToProps = (state,props) => {
    return {
      favorites: state.posts.favorites
    }
}

export default connect(mapStateToProps)(Favorites);