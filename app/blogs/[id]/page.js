import React from 'react';

function BlogPage({params}) {

    const {id} = params

    return (
        <div>
            This is blog: {id}
        </div>
    );
}

export default BlogPage;