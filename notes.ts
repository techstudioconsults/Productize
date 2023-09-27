// try {
//   // Make multiple requests
//   const [response] = await Promise.all([
//     axios.get(
//       `https://productize-api.techstudio.academy/api/auth/oauth/redirect?provider=google`
//     ),
//   ]);
//   if (response.status === 200) {
//     console.log(response.data);
//     if (response.data.redirect_url) {
//       // Redirect the user to the obtained OAuth provider URL
//       window.location.href = response.data.redirect_url;
//     } else {
//       // Handle error or unsupported provider
//       console.error(`Failed to obtain redirect URL for google`);
//     }
//   }
// } catch (err: any) {
//   console.log(err);
//   toast({
//     title: 'Something went wrong',
//     description: err.response.data.message,
//     status: 'error',
//     duration: 9000,
//     isClosable: true,
//     position: 'top',
//     variant: 'top-accent',
//   });
// }


// try {
//   // setIsLoading(true);
//   // Make multiple requests
//   const [response] = await Promise.all([
//     axios.post(
//       `https://productize-api.techstudio.academy/api/auth/oauth/callback`,
//       data
//     ),
//   ]);
//   if (response.status === 200) {
//     console.log(response);
//     navigate(`/explore`);
//   }
// } catch (err: any) {
//   console.log(err);
// }

// "implicitDependencies": ["external-pages", "explore", "authentication", "dashboard"]
//
