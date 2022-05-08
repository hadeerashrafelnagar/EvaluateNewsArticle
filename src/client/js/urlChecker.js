const vInput=document.getElementsByTagName("span")[0]
function checkForUrl(userUrl) {
    console.log("::: Running checkForUrl :::", userUrl);
    const regex=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    if(userUrl==""){
        vInput.innerText="please enter a url"
        vInput.classList.add("error")
    }else if(regex.test(userUrl)){
        vInput.innerText=""
        console.log("true")
        return(userUrl)
    }else {
        vInput.innerText="please enter a valid url"
        vInput.classList.add("error")
    }
}

export { checkForUrl }
