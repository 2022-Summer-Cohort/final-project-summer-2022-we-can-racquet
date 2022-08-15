export default function header() {
   return  `
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/img/tennis.png" alt="cd logo" id="navbarIcon" width="35" height="35">
           </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item">
                        <a class="home-navigation nav-link active" aria-current="page" href="#">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="challenge-navigation nav-link active" aria-current="page" href="#">Challenges</a>
                    </li>
                    <li class="nav-item">
                        <a class="records-navigation nav-link active" aria-current="page" href="#">Records</a>
                    </li>
 
                </ul>
            </div>
        </div>
    </nav>
    
    `
}