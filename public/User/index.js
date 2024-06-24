window.addEventListener("scroll",async()=>{
    let ratio = window.scrollY/window.innerHeight
    if(ratio>.1){
        document.getElementById("head-bouncer").style.opacity=0
    }else{
        document.getElementById("head-bouncer").style.opacity=1
    }
    if(ratio>.8){
        document.getElementById("sec-front").style.position = "relative"
        document.getElementById("sec-1-bottxt").style.display = null
        document.getElementById("sec-1-profile").style.display = null

    }else{
        document.getElementById("sec-front").style.position = "fixed"
        document.getElementById("sec-1-bottxt").style.display = "none"
        document.getElementById("sec-1-profile").style.display = "none"

    }
    if(ratio>.5){
        document.getElementById("sec-1-txt").style.color = "black"
    }else{
        document.getElementById("sec-1-txt").style.color = "white"
    }
})

function  ReWidth(){
    if(window.innerWidth > 765){
        document.getElementById("navbar-sticky").style.display = "block"
        document.getElementById("nav").style.backgroundColor = "white"
        document.getElementById("nav-btn").style.color = "black"
    }else{
        document.getElementById("navbar-sticky").style.display = "none"
        document.getElementById("nav").style.backgroundColor = "white"
        document.getElementById("nav-btn").style.color = "black"
    }
}
ReWidth()
window.addEventListener("resize",ReWidth)

document.getElementById("nav-btn").addEventListener("click",e=>{
    if(document.getElementById("navbar-sticky").style.display == "none"){
        document.getElementById("navbar-sticky").style.display = "block"
        document.getElementById("nav").style.backgroundColor = "black"
        document.getElementById("nav-btn").style.color = "white"
    }
        
    else{
        document.getElementById("navbar-sticky").style.display = "none"
        document.getElementById("nav").style.backgroundColor = "white"
        document.getElementById("nav-btn").style.color = "black"

    
    }

})


function Links(id){
    if(window.innerWidth <= 765){
        document.getElementById("navbar-sticky").style.display = "none"
            document.getElementById("nav").style.backgroundColor = "white"
            document.getElementById("nav-btn").style.color = "black"
    }
    document.getElementById(id).scrollIntoView({behavior:"smooth"})
}



// Type 0 - Iot  
// Type 1 - Web  
// Type 2 - ML  
const Projects = [
    {
        title:"Ai Headline Generator",
        desc:"Generates Headlined using generative ai api from Germini-flash. It can generate CTA's for websites and 10 headlines for 5 social platforms.",
        type:1,
        link:"https://ai-headlines.vercel.app/",
        frameworks:['node','express'],
        img:"../assets/Projects/1.png"
    },
    {
        title:"Cuvette Jobs",
        desc:"Cuvette is a Job serarching website here comapines can post their job requirements and students or employees can apply for the job posts.",
        type:1,
        link:"https://ai-headlines.vercel.app/",
        frameworks:['node','express','mongo','react'],
        img:"../assets/Projects/2.png"
    },
    {
        title:"Hydrogen Leakage detection",
        desc:"H2 Gas leakgae detection stystem is used to detect leakages in hydrogen gas cylinders and pipes.",
        type:0,
        link:"https://github.com/YahyaSaadME/H2-Detection",
        frameworks:['arduino'],
        img:"../assets/Projects/3.png"
    }


]
Projects.map((e,i)=>{
    document.getElementById("projects").innerHTML+=`
                    <div
                    class="max-w-xs mt-4 mx-4 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <img src="${e.img}" alt="" />
                    <div class="p-5 ">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${e.title}</h5>
                        </a>
                        <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">${e.desc}</p>
                        
                        <div class="flex justify-between items-center">

                            <div class="grid grid-cols-4">
                            
                            ${e.frameworks.find(e=>e=="node")?
                                         ` 
                                        <div
                                    class="mr-3 group text-gray-500 hover:text-gray-900 flex flex-col justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-500 hover:text-gray-900"
                                        fill="currentColor" height="20"
                                        viewBox="0 0 24 24"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                        <path
                                            d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 00.272 0l8.795-5.076a.277.277 0 00.134-.238V6.921a.283.283 0 00-.137-.242l-8.791-5.072a.278.278 0 00-.271 0L3.075 6.68a.284.284 0 00-.139.241v10.15a.27.27 0 00.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.856 1.856 0 01-.922-1.604V6.921c0-.659.353-1.275.922-1.603L11.075.236a1.925 1.925 0 011.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15a1.86 1.86 0 01-.924 1.604l-8.794 5.078c-.28.163-.599.247-.925.247zm7.101-10.007c0-1.9-1.284-2.406-3.987-2.763-2.731-.361-3.009-.548-3.009-1.187 0-.528.235-1.233 2.258-1.233 1.807 0 2.473.389 2.747 1.607a.254.254 0 00.247.199h1.141a.26.26 0 00.186-.081.257.257 0 00.067-.196c-.177-2.098-1.571-3.076-4.388-3.076-2.508 0-4.004 1.058-4.004 2.833 0 1.925 1.488 2.457 3.895 2.695 2.88.282 3.103.703 3.103 1.269 0 .983-.789 1.402-2.642 1.402-2.327 0-2.839-.584-3.011-1.742a.255.255 0 00-.253-.215h-1.137a.252.252 0 00-.254.253c0 1.482.806 3.248 4.655 3.248 2.788.001 4.386-1.096 4.386-3.013z" />
                                    </svg>
                                </div>`:""

                            }
                                    
                            ${e.frameworks.find(e=>e=="express")?
                                        `<div
                                                    class="mr-3 group text-gray-500 hover:text-gray-900 flex flex-col justify-center items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-500 hover:text-gray-900"
                                                        fill="currentColor" height="20"
                                                        viewBox="0 0 24 24"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                                        <path
                                                            d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                                                    </svg>
                                                </div>`:""
                                    
                                    }
                                    ${e.frameworks.find(e=>e=="mongo")?
                                        `<div
                                                    class="mr-3 group text-gray-500 hover:text-gray-900 flex flex-col justify-center items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-500 hover:text-gray-900"
                                                        fill="currentColor" height="20"
                                                        viewBox="0 0 24 24"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                                        <path
                                                            d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.12-15.38zM12 19.48a3.48 3.48 0 01-.48-.48L12 9l.45 10a3.57 3.57 0 01-.45.48z" />
                                                    </svg>
                                                </div>`:""
                                    }
                                    ${e.frameworks.find(e=>e=="react")?
                                        `<div
                                                    class="mr-3 group text-gray-500 hover:text-gray-900 flex flex-col justify-center items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-500 hover:text-gray-900"
                                                        class="text-gray-500 hover:text-gray-900" fill="currentColor" height="20"
                                                        viewBox="0 0 34 28">
                                                    <path d="M19.314 15.987a2.392 2.392 0 11-4.784 0 2.392 2.392 0 014.784 0z" />
                                                    <path d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906.489 0 .952-.103 1.337-.334 1.337-.772 1.826-2.701 1.363-5.453-.077-.489-.18-.977-.309-1.492.514-.154.977-.309 1.44-.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-.463-.18-.926-.334-1.44-.463.129-.514.232-1.003.309-1.492.437-2.803-.051-4.758-1.389-5.53-.386-.231-.849-.334-1.337-.334-1.466 0-3.344 1.08-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-.489 0-.952.103-1.337.334-1.337.772-1.826 2.701-1.363 5.453.077.489.18.977.309 1.492-.514.154-.977.309-1.44.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909.463.18.926.334 1.44.463a16.882 16.882 0 00-.309 1.492c-.437 2.752.051 4.707 1.363 5.453.386.232.849.334 1.337.334 1.492.051 3.344-1.029 5.221-2.829zm-1.441-3.472c.463.026.952.026 1.44.026s.977 0 1.44-.026a24.523 24.523 0 01-1.44 1.723 24.252 24.252 0 01-1.44-1.723zm-3.189-2.649c.257.437.489.849.772 1.26a27.786 27.786 0 01-2.263-.386c.232-.694.489-1.415.797-2.135.206.411.437.849.694 1.26zM10.8 12.463c.72-.154 1.466-.283 2.263-.386-.257.412-.514.823-.772 1.26s-.489.849-.694 1.286a17.109 17.109 0 01-.797-2.161zm1.415 3.524c.334-.694.694-1.389 1.106-2.083.386-.669.823-1.337 1.26-2.006a35.293 35.293 0 014.682 0c.463.669.874 1.337 1.26 2.006.412.694.772 1.389 1.106 2.083a26.922 26.922 0 01-1.106 2.083c-.386.669-.823 1.337-1.26 2.006a35.293 35.293 0 01-4.682 0 28.695 28.695 0 01-1.26-2.006 27.106 27.106 0 01-1.106-2.083zm10.057-1.389l-.694-1.286c-.257-.437-.489-.849-.772-1.26.797.103 1.543.232 2.263.386-.231.72-.489 1.44-.797 2.161zm0 2.778c.309.72.566 1.44.797 2.135-.72.154-1.466.283-2.263.386.257-.412.514-.823.772-1.26.232-.386.463-.823.694-1.26zm.591 8.925c-.206.129-.463.18-.746.18-1.26 0-2.829-1.029-4.372-2.572a26.868 26.868 0 002.186-2.701 23.619 23.619 0 003.447-.54c.129.463.206.926.283 1.389.36 2.186.077 3.755-.797 4.244zm1.338-13.555c2.881.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-.412.154-.874.309-1.337.437a27.01 27.01 0 00-1.26-3.241c.514-1.106.952-2.186 1.26-3.241zm-2.058-7.253c.283 0 .514.051.746.18.849.489 1.157 2.032.797 4.244-.077.437-.18.9-.283 1.389a33.072 33.072 0 00-3.447-.54 23.774 23.774 0 00-2.186-2.701c1.543-1.518 3.112-2.572 4.372-2.572zm-3.781 5.17c-.463-.026-.952-.026-1.44-.026s-.977 0-1.44.026c.463-.617.952-1.183 1.44-1.723.489.54.977 1.132 1.44 1.723zm-7.382-4.99c.206-.129.463-.18.746-.18 1.26 0 2.829 1.029 4.372 2.572a26.756 26.756 0 00-2.186 2.701 23.619 23.619 0 00-3.447.54c-.129-.463-.206-.926-.283-1.389-.36-2.186-.077-3.729.797-4.244zM9.643 19.228c-2.881-.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803.412-.154.874-.309 1.337-.437a27.01 27.01 0 001.26 3.241c-.514 1.106-.952 2.212-1.26 3.241zm.54 2.829c.077-.437.18-.9.283-1.389 1.08.232 2.238.412 3.447.54a23.774 23.774 0 002.186 2.701c-1.543 1.517-3.112 2.572-4.372 2.572-.283 0-.514-.051-.746-.18-.875-.489-1.157-2.058-.797-4.244z" />
                                                </svg>
                                            </div>`:""
                                    }
                                    ${e.frameworks.find(e=>e=="arduino")?
                                        `
                                            <svg fill="currentColor" class="text-gray-500 hover:text-gray-900" height="20" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.258 9.777h0.075c0.087 0 0.125-0.012 0.125-0.087 0-0.062-0.038-0.087-0.125-0.087h-0.087v0.175zM30.233 10.152h-0.125v-0.65l0.25-0.012c0.010-0.001 0.023-0.001 0.035-0.001 0.069 0 0.134 0.014 0.193 0.040l-0.003-0.001c0.045 0.025 0.075 0.072 0.075 0.126 0 0.004-0 0.008-0 0.012l0-0.001c0 0.075-0.050 0.125-0.137 0.137 0.062 0.025 0.087 0.075 0.112 0.162l0.038 0.162h-0.15c-0.025-0.025-0.025-0.087-0.050-0.162-0.025-0.063-0.050-0.087-0.137-0.087h-0.062l-0.025 0.275zM29.859 9.827c-0 0.004-0 0.009-0 0.014 0 0.268 0.218 0.486 0.486 0.486 0.005 0 0.010-0 0.015-0l-0.001 0c0.265-0.014 0.475-0.232 0.475-0.5s-0.21-0.486-0.474-0.5l-0.001-0c-0.013-0.001-0.027-0.002-0.042-0.002-0.254 0-0.46 0.206-0.46 0.46 0 0.015 0.001 0.029 0.002 0.044l-0-0.002zM30.996 9.827c0 0.004 0 0.010 0 0.015 0 0.344-0.279 0.624-0.624 0.624-0.014 0-0.027-0-0.041-0.001l0.002 0c-0.008 0-0.016 0.001-0.025 0.001-0.348 0-0.63-0.279-0.637-0.625v-0.001c0.008-0.36 0.301-0.649 0.662-0.65h0c0.009-0.001 0.020-0.001 0.032-0.001 0.348 0 0.631 0.282 0.631 0.631 0 0.003-0 0.005-0 0.008v-0zM23.923 16.737h1.487v-1.45h-1.5v-1.487h-1.412v1.5h-1.5v1.437h1.5v1.475h1.437v-1.462zM6.265 16.737h4.424v-1.45h-4.411v1.45zM17.25 16c1.037-2.222 2.974-3.876 5.328-4.511l0.058-0.013c0.194-0.033 0.418-0.052 0.646-0.052 0.045 0 0.090 0.001 0.135 0.002l-0.007-0c0.041-0.001 0.090-0.002 0.139-0.002 2.552 0 4.628 2.034 4.697 4.569l0 0.006c-0.083 2.544-2.165 4.575-4.721 4.575-0.036 0-0.072-0-0.108-0.001l0.005 0c-0.25 0-0.525-0.025-0.775-0.050-2.41-0.652-4.345-2.305-5.365-4.473l-0.021-0.050zM9.102 20.499c-0.197 0.033-0.425 0.052-0.657 0.052-0.046 0-0.092-0.001-0.137-0.002l0.007 0c-0.030 0.001-0.066 0.001-0.102 0.001-2.554 0-4.633-2.032-4.709-4.568l-0-0.007c0.083-2.544 2.165-4.575 4.721-4.575 0.036 0 0.072 0 0.108 0.001l-0.005-0c0.25 0 0.525 0.025 0.787 0.050 2.417 0.639 4.356 2.296 5.365 4.473l0.021 0.050c-1.025 2.23-2.967 3.889-5.329 4.511l-0.057 0.013zM30.771 16c-0.077-3.93-3.28-7.087-7.222-7.087-0.044 0-0.089 0-0.133 0.001l0.007-0c-0.362 0-0.75 0.025-1.125 0.062-2.731 0.545-5.004 2.178-6.387 4.42l-0.024 0.042c-1.423-2.273-3.694-3.902-6.36-4.45l-0.063-0.011c-0.375-0.037-0.75-0.062-1.125-0.062-0.034-0.001-0.074-0.001-0.114-0.001-3.941 0-7.145 3.156-7.222 7.079l-0 0.007c0.077 3.93 3.281 7.086 7.222 7.086 0.040 0 0.080-0 0.12-0.001l-0.006 0c0.406-0.001 0.805-0.028 1.196-0.080l-0.047 0.005c2.734-0.539 5.011-2.169 6.399-4.407l0.024-0.041c1.42 2.275 3.693 3.905 6.36 4.45l0.063 0.011c0.387 0.037 0.75 0.062 1.137 0.062 0.023 0 0.049 0 0.076 0 3.941 0 7.145-3.156 7.221-7.079l0-0.007z"></path>
                                            </svg>
                                        `:""
                            }

                            </div>
                            <a href="${e.link}" class="inline-flex items-center px-3 py-2 text-xs text-center text-white"
                                style="background-color: black;">
                                Visit Now
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
    
    `
})

const Hackathons=[
    {
        title:"Next Gen Ai",
        won:2,
        desc:"Built a Transliterator tool for Bajaj Finzerv one of the top biggest Finance companies in india.",
        certificate:"https://drive.google.com/drive/folders/1rwzIIaeqDkWW7A23iHyYRgZpnG6HB5Sa?usp=drive_link"
    },{
        title:"Coding Ninjas",
        won:0,
        desc:"Built a web app to make decisions on purchasing new products and to analyze a good product using gen ai.",
        certificate:""
    },
]

Hackathons.map((e,i)=>{
    document.getElementById("hackathones").innerHTML+=`
                    <div
                    class="max-w-xs mt-4 mx-4 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-5 ">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${e.title}</h5>
                        <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">${e.won==0?"😓Unfortunately not Won":e.won==1?"🏆 Won in 1st place.":e.won==2?"🏆 Won in 2nd place.":"🏆 Won in 3rd place."}
                        </p>
                        <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">${e.desc}
                        </p>

                        <div class="flex justify-end items-center">
                            <a href="${e.certificate}" class="inline-flex items-center px-3 py-2 text-xs text-center text-white"
                                style="background-color: black;">
                                View certificate
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
    
    `
})

async function contact(){
    try {
        const name = document.getElementById("con-name").value
        const email = document.getElementById("con-email").value
        const desc = document.getElementById("con-desc").value

        if (name==""|| email ==""||desc==""){
            document.getElementById("contact-notify").innerHTML = `
            <div class="w-full p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
            Please fill the below 👆 details.
                </div>
            `
            return 0;
        }
        const req = await fetch("/contact",{
            method:"POST",
            headers:{
                "Content-Type":'application/json'
            },
            body:JSON.stringify({name,email,desc})
        })
    
        const res = await req.json()
        if(res.sent){
            
            document.getElementById("contact-notify").innerHTML = `
            <div class="w-full p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            ${res.msg}
                </div>
            `
        }else{
            document.getElementById("contact-notify").innerHTML = `
            <div class="w-full p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
            ${res.msg}
                </div>
            `
        }
        
    } 
    catch (error) {
        document.getElementById("contact-notify").innerHTML = `
            <div class="w-full p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
            Oops 😓, something went wrong with server. 
                </div>
            `
    }
}