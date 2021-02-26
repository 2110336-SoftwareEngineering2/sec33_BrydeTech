import React , { Component, useState, useCallback } from "react";

const titles = ['Course','Livestream','OffMessage','Account','Help Center'] //edit by ford : del 'Home'

const title_group = titles.map(title => {
    return (
        <li class="nav-item">
            <a
                class="nav-link"
                aria-current="page"
                href={'/' + title}
            >
                {title}
            </a>
        </li>
    )
})

function Header(props) {

    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">OffDemand</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        {title_group}
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            {<a class="nav-link active"  href="/login">Login</a>} {/*สู้ ๆ นะ*/}
                        </li>

                        <li class="nav-item">
                            {<a class="nav-link active"  href="/register">Register</a>}
                            {/*<a class="nav-link active"  href="/register">{isLogin2 ? isLogin2 : `Reg,${props.isLogin}`}</a>*/}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header

// export default class Header extends Component {
    
//     render(){
//         return(
//             <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//                 <div class="container-fluid">
//                     <span class="navbar-brand mb-0 h1">OffDemand</span>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li class="nav-item">
//                         <a class="nav-link active" aria-current="page" href="/">Home</a>
//                         </li>
//                         {title_group}
//                     </ul>
//                     <form class="d-flex">
//                         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                         <button class="btn btn-outline-success" type="submit">Search</button>
//                     </form>
//                     <ul class="navbar-nav mb-2 mb-lg-0">
//                     <li class="nav-item">
//                         <a class="nav-link active"  href="/login">{isLogin ? '' : 'Login'}</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link active"  href="/register">{isLogin ? '' : 'register'}</a>
//                     </li>
//                     </ul>
//                     </div>
//                 </div>
//             </nav>
//         );
//     }
// }