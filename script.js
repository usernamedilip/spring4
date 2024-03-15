async function fetchTodos(){
    try{
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
        if(!resp.ok){
            throw new Error('Failed to fetch....');
        }
        const data = await resp.json();
        displayTodos(data);
    }
    catch(error){
        console.log(error.message);
        document.getElementById('myContent').innerHTML = 'Failed to Fetch the data.........';
    }
    
    finally {
        console.log('Data Fetched....')

    }   
    
    
}

async function fetchPosts(){
    try{
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!resp.ok){
            throw new Error('Failed to fetch....');
        }
        const data = await resp.json();
        displayPosts(data);
    }
    catch(error){
        console.log(error.message);
        document.getElementById('myContent').innerHTML = 'Failed to Fetch the data.........';
    }
    
    finally {
        console.log('Data Fetched....')

    }   
    
    
}

function displayTodos(data){
    const myData = document.getElementById('myContent');
    myData.innerHTML = '';
    data.forEach(post => {
        const myPost = document.createElement('div');
        myPost.innerHTML = `
        <p>${post.userId}</p>
        <p> ${post.id}</p>
        <p>${post.title}</p>
        <p>${post.completed}</p>
        `;
        myData.appendChild(myPost);
    });

}

function displayPosts(data){
    const myData = document.getElementById('myContent');
    myData.innerHTML = '';
    data.forEach(post => {
        const myPost = document.createElement('div');
        myPost.innerHTML = `
        <p>${post.userId}</p>
        <p>${post.id}</p>
        <p>${post.title}</p>
        <p>${post.body}</p>
        `;
        myData.appendChild(myPost);
    });

}

