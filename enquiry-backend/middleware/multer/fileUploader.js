  
  export const uploadSingleFileToBunny = async (file) => {
    // Replace this with actual logic to upload to BunnyCDN or other services
    // For now, simulate URL return
    const fileName = Date.now() + "-" + file.originalname;
    const fakeUrl = `https://your-cdn.com/uploads/${fileName}`;
    return fakeUrl;
  };
