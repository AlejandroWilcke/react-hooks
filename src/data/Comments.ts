export async function getCommentsFromPost( postId : string ){
	return fetch(process.env.REACT_APP_ENDPOINT_POSTS + `${postId}/comments`)
							.then( response => response.json() )
							.then( comments => comments )
							.catch( error => {
								console.log(error)
								return []
							})
}