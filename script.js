function Show() 
{
    document.getElementbyId("image").style.visibility="visible";
    if (Cntr==1) {
        setTimeout("Show", 2000);
    }

}