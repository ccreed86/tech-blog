const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#posts-title').value.trim();
  const body = document.querySelector('#posts-body').value.trim();

  if (title && body) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/posts/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/posts');
//     } else {
//       alert('Failed to delete post');
//     }
//   }
// };

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.posts-list')
//   .addEventListener('click', delButtonHandler);
