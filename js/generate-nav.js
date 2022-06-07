document.body.firstElementChild.innerHTML = `<nav class="flex justify-between align-center">
                                                <div id="nav-main">
                                                    <div class="flex align-center">
                                                        <a href="/index.html" class="flex align-center logo">
                                                            <img src="/img/logo.png" alt="">
                                                            <span class="font-different text-primary">TBCFBM</span>
                                                        </a>
                                                        <div id="closeNav" onclick="closeNav()">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                                                <path
                                                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                                                                    fill="currentColor" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <ul class="flex-column">
                                                        <li><a href="/index.html" class="text-light flex align-center"><svg
                                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                                                    <path
                                                                        d="M511.8 287.6L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L416 100.7V64C416 46.33 430.3 32 448 32H480C497.7 32 512 46.33 512 64V185L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6L511.8 287.6z"
                                                                        fill="currentColor" />
                                                                </svg>Home</a></li>
                                                        <li><a href="/aboutGame.html" class="text-light flex align-center"><svg fill="currentColor"
                                                                    data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
                                                                    <title>tennis-racket</title>
                                                                    <path
                                                                        d="M113.5,9.38C106.38,2.26,96.54-.75,86.38.16A46.45,46.45,0,0,0,58,13.88,46.46,46.46,0,0,0,44.28,42.26,36.89,36.89,0,0,0,45.53,55.8a59.32,59.32,0,0,1-5.29,14.47,73.68,73.68,0,0,1-5,8.29,2.38,2.38,0,0,0-.66.44L.65,111.28a2.22,2.22,0,0,0,0,3.14l7.81,7.8a2.2,2.2,0,0,0,3.14,0L43.88,88.31a2.38,2.38,0,0,0,.44-.66,74.36,74.36,0,0,1,8.29-5,59.55,59.55,0,0,1,14.47-5.28A36.89,36.89,0,0,0,80.62,78.6,46.46,46.46,0,0,0,109,64.87,46.45,46.45,0,0,0,122.72,36.5c.91-10.16-2.1-20-9.22-27.12Zm-62,41.51,0,0A29.49,29.49,0,0,1,51,46l2.09-2.08,3.22,3.22L52,51.41l-.52-.52Zm.77,3.34,3,3L54,58.46a25.86,25.86,0,0,1-1.72-4.23Zm4.26,4.25,3.3,3.3-2.06,2.06a24.4,24.4,0,0,1-2.85-3.75l1.61-1.61Zm4.58,4.58,3.3,3.3L62.79,68A23.92,23.92,0,0,1,59,65.12l2.06-2.06Zm4.58,4.58,3,3a25.51,25.51,0,0,1-4.23-1.72l1.26-1.26ZM72,71.42l-.55-.55,4.32-4.32L79,69.77l-2.08,2.09A29.49,29.49,0,0,1,72,71.42Zm-1.84-1.83L67,66.36,71.28,62l3.23,3.23-4.33,4.32Zm-4.5-4.51-3.3-3.3,4.32-4.32,3.3,3.3-4.32,4.32ZM61.1,60.5l-3.3-3.3,4.32-4.32,3.3,3.3L61.1,60.5Zm-4.58-4.58-3.23-3.23,4.32-4.32,3.23,3.23-4.32,4.32ZM51.24,42l.58.59-.71.71,0-.43q0-.43.09-.87ZM80.29,71.05l.59.59q-.43.06-.87.09l-.43,0,.71-.72Zm2.82.26-1.54-1.54,4.33-4.32,3.22,3.23-1.5,1.51a36.66,36.66,0,0,1-4.51,1.12Zm-2.82-2.82-3.22-3.22L81.39,61l3.22,3.22-4.32,4.32ZM75.79,64l-3.23-3.23,4.32-4.32,3.23,3.22L75.79,64Zm-4.51-4.51L68,56.18l4.32-4.32,3.3,3.3-4.32,4.32ZM66.7,54.9l-3.3-3.3,4.32-4.32,3.3,3.3L66.7,54.9Zm-4.58-4.58-3.23-3.23,4.32-4.32L66.44,46l-4.32,4.32Zm-4.51-4.51-3.22-3.22,4.32-4.33,3.22,3.23-4.32,4.32Zm-4.5-4.51-1.54-1.53a36.07,36.07,0,0,1,1.12-4.5l1.51-1.51L57.43,37,53.11,41.3ZM90.4,67.4l-3.22-3.23,4.32-4.32,3.22,3.23L90.4,67.4Zm-4.5-4.51-3.23-3.23L87,55.34l3.23,3.23L85.9,62.89Zm-4.51-4.51-3.23-3.22,4.32-4.32,3.23,3.22-4.32,4.32Zm-4.51-4.5-3.3-3.3,4.32-4.32,3.3,3.3-4.32,4.32ZM72.3,49.3,69,46l4.32-4.32,3.3,3.3L72.3,49.3Zm-4.58-4.58L64.5,41.49l4.32-4.32L72,40.4l-4.32,4.32Zm-4.51-4.51L60,37l4.32-4.32,3.23,3.23-4.33,4.32Zm-4.5-4.51-3.23-3.22,4.32-4.32L63,31.38,58.71,35.7ZM57.29,25.64l1.23,1.23-4.23,4.24a40.72,40.72,0,0,1,3-5.47ZM96,64.36l1.23,1.23a41.23,41.23,0,0,1-5.46,3L96,64.36Zm2.75.19-1.47-1.47,4.32-4.32,1.86,1.86a42.1,42.1,0,0,1-4.71,3.93ZM96,61.8l-3.23-3.23,4.32-4.32,3.23,3.22L96,61.8ZM91.5,57.29l-3.23-3.23,4.32-4.32L95.82,53,91.5,57.29ZM87,52.78l-3.23-3.22,4.33-4.33,3.22,3.23L87,52.78Zm-4.51-4.51L79.18,45l4.33-4.33,3.3,3.3-4.33,4.32ZM77.9,43.69,74.6,40.4l4.33-4.33,3.3,3.3L77.9,43.69Zm-4.58-4.58L70.1,35.89l4.32-4.32,3.23,3.22-4.33,4.32Zm-4.5-4.5-3.23-3.23,4.32-4.32,3.23,3.23-4.32,4.32ZM64.31,30.1l-3.23-3.23,4.32-4.32,3.23,3.23L64.31,30.1ZM59.8,25.59l-1.47-1.47a42.1,42.1,0,0,1,3.93-4.71l1.86,1.86L59.8,25.59ZM95,7.33l0,0,.52.52L91.22,12.2,88,9l2.08-2.08A29.7,29.7,0,0,1,95,7.33Zm1.83,1.83,3.22,3.23-4.32,4.32-3.22-3.23,4.32-4.32Zm4.5,4.51,3.3,3.3-4.32,4.32L97,18l4.32-4.32Zm4.58,4.58,3.3,3.3-4.32,4.32-3.3-3.3,4.32-4.32Zm4.58,4.58,3.23,3.22-4.32,4.32-3.23-3.22,4.32-4.32Zm4.51,4.5.55.55A30.82,30.82,0,0,1,116,32.8l-2.08,2.08-3.23-3.23L115,27.33Zm-.26-2.82-3-3L113,20.3a25,25,0,0,1,1.72,4.21Zm-4.25-4.25L107.19,17l2.06-2.06a24.4,24.4,0,0,1,2.85,3.75l-1.61,1.6Zm-4.58-4.58-3.3-3.29,1.61-1.61A24.4,24.4,0,0,1,108,13.63l-2.06,2Zm-4.58-4.58-3-3a25.78,25.78,0,0,1,4.21,1.71l-1.25,1.25ZM83.9,7.44,85.44,9l-4.32,4.32-3.23-3.22,1.5-1.51A37.12,37.12,0,0,1,83.9,7.44Zm2.82,2.81,3.22,3.23L85.62,17.8,82.4,14.58l4.32-4.33Zm4.5,4.51L94.45,18l-4.32,4.32L86.9,19.08l4.32-4.32Zm4.51,4.51,3.3,3.3-4.32,4.32-3.3-3.3,4.32-4.32Zm4.58,4.58,3.3,3.3-4.32,4.32L96,28.17l4.32-4.32Zm4.58,4.58,3.23,3.22L103.8,36l-3.23-3.23,4.32-4.32Zm4.51,4.51,3.23,3.22-4.33,4.32-3.22-3.22,4.32-4.32Zm4.51,4.5L115.44,39a35.41,35.41,0,0,1-1.13,4.51l-1.5,1.5-3.23-3.23,4.33-4.32Zm1.86-.69-.58-.59.71-.71,0,.44c0,.28,0,.57-.09.86Zm-29-29.06-.59-.58L87,7l.44,0-.71.71ZM76.61,11.35l3.23,3.23L75.51,18.9l-3.22-3.23,4.32-4.32Zm4.51,4.51,3.22,3.22L80,23.4l-3.23-3.22,4.33-4.32Zm4.5,4.5,3.23,3.23-4.32,4.32L81.3,24.68l4.32-4.32Zm4.51,4.51,3.3,3.3-4.32,4.32-3.3-3.3,4.32-4.32Zm4.58,4.58,3.3,3.3-4.32,4.32-3.3-3.3,4.32-4.32ZM99.29,34l3.23,3.23-4.33,4.32L95,38.35,99.29,34Zm4.51,4.51L107,41.76l-4.32,4.32-3.22-3.22,4.32-4.32Zm4.5,4.5,3.23,3.23-4.32,4.32L104,47.37,108.3,43Zm-40-28.84,1.47,1.47L65.4,20l-1.86-1.86a41.31,41.31,0,0,1,4.72-3.93ZM71,17l3.22,3.23L69.91,24.5l-3.22-3.23L71,17Zm4.5,4.51,3.23,3.22L74.42,29l-3.23-3.23,4.32-4.32ZM80,26l3.23,3.22-4.32,4.32L75.7,30.29,80,26Zm4.51,4.5,3.3,3.3-4.32,4.32-3.3-3.3,4.32-4.32Zm4.58,4.58,3.3,3.3-4.32,4.32-3.3-3.3,4.32-4.32Zm4.58,4.58,3.22,3.23-4.32,4.32L89.37,44l4.32-4.32Zm4.5,4.51,3.23,3.23L97.1,51.69l-3.23-3.23,4.32-4.32Zm4.51,4.51,3.23,3.22-4.32,4.32L98.38,53l4.32-4.32Zm4.51,4.5,1.47,1.47a42.2,42.2,0,0,1-3.93,4.72l-1.86-1.87,4.32-4.32Zm2.51,0-1.23-1.23,4.22-4.22a38.79,38.79,0,0,1-3,5.45ZM71,14.39l-1.23-1.23a39.91,39.91,0,0,1,5.45-3L71,14.39ZM50,65.13a31.66,31.66,0,0,0,3.55,4.24,30.89,30.89,0,0,0,4.25,3.55,71.48,71.48,0,0,0-8.3,3.63,78.48,78.48,0,0,0-7.64,4.52,78.48,78.48,0,0,0,4.52-7.64A69.74,69.74,0,0,0,50,65.13Z" />
                                                                </svg>About Game</a></li>
                                                        <li><a href="/contactUs.html" class="text-light flex align-center"><svg
                                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                                                    <path
                                                                        d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
                                                                        fill="currentColor" />
                                                                </svg>Contact Us</a></li>
                                                        <li><a href="/events.html" class="text-light flex align-center"><svg
                                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                                                    <path
                                                                        d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z"
                                                                        fill="currentColor" />
                                                                </svg>Events</a></li>
                                                        <li><a href="" class="text-light flex align-center "><svg fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                                                    <path
                                                                        d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3c-95.73 0-173.3 77.6-173.3 173.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM479.1 320h-73.85C451.2 357.7 480 414.1 480 477.3C480 490.1 476.2 501.9 470 512h138C625.7 512 640 497.6 640 479.1C640 391.6 568.4 320 479.1 320zM432 256C493.9 256 544 205.9 544 144S493.9 32 432 32c-25.11 0-48.04 8.555-66.72 22.51C376.8 76.63 384 101.4 384 128c0 35.52-11.93 68.14-31.59 94.71C372.7 243.2 400.8 256 432 256z" />
                                                                </svg>Affilated unit</a></li>
                                                    </ul>
                                                </div>
                                                <div id="nav-left">
                                                    <a href="/index.html" class="flex align-center logo">
                                                        <img src="/img/logo.png" alt="">
                                                        <span class="font-different font-md text-primary">TBCFBM</span>
                                                    </a>
                                                </div>
                                                <div id="nav-right justify-end">
                                                    <div id="burger" onclick="openNav()">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                        </nav>`