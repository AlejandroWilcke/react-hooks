export async function getPosts(){
	return await fetch(process.env.REACT_APP_ENDPOINT_POSTS)
							.then( response => response.json() )
							.then( posts => posts )
							.catch( error => {
								console.log(error)
								return []
							} )
}