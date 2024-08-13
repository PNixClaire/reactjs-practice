function ProfilePicture() {
    
    const imageUrl = './src/assets/image.png';

    //when you click the image, it will disappear
    const handleClick = (e) => e.target.style.display = "none";

    return (<img onClick={(e) => handleClick(e)} src={imageUrl}></img>);
}

export default ProfilePicture