import React from 'react'
import Layout from '../../components/Layout'

export default function masssacreinmelbourne() {
    return (
        <>
            <Layout>
                <div className='content'>
                    <h2>Massacre in Melbourne</h2>

                    <p>"Massacre In Melbourne" is an interactive and immersive experience, taking you through a tour of Melbourne's darkest underworld locations. You will follow the footsteps of detective Peyton McMillan, as he tries to solve the... Massacre In Melbourne.</p>

                    <p>Set in the 1950's, the story will take you on a journey through time, featuring locations with dark histories from the 1800's all the way to 2004. The story at each location is inspired by events that transpired there, although some facts have been edited to better fit the narrative.</p>

                    <p>Locations include the County Court of Victoria, the Old Melbourne Gaol, the Century Building and the Carlton Gardens. The entire tour can be completable in less than 3 hours, although if you stop to scope out and investigate more of a location it may take longer.</p>

                    <p>Although created as a university project, Massacre in Melbourne works as a functional (if fictional) tour, and can be taken by visiting <a href="http://www.massacreinmelbourne.com">www.massacreinmelbourne.com</a>.</p>

                    <p>This project was created before the tragic events at Burke Street. To learn more, find assistance or donate, visit the <a href="http://www.vic.gov.au/bourkestreet.html">Victorian Government Website</a>.</p>

                    <h4>Some Points of Note:</h4>

                    <ul>
                        <li>
                            While the site is responsive and designed specifically for mobile devices, mobile Safari on iPhone’s places a “bookmarks” toolbar along the bottom of the screen. This changes the screen height, and alters the way that the bottom menu functions. In subsequent iterations this may be resolved with a plug in like “Brim”. The current suggestion is for mobile users to use a browser other than Safari.
                        </li>
                        <li>
                            The geo-fenced aspects of the site are not yet implemented. While this would have been a nice addition, users will have to manually play the audio/video clips at each location.
                        </li>
                        <li>
                            Some locations are meant to have augmented reality audio. While the audio and some visuals exist, placing the video into a real environment is beyond the scope of the project and may require an engine like Unity to implement.
                        </li>
                        <li>
                            To ensure maps work for as many users as possible, the site automatically redirects to the secure (https://) version of the site.
                        </li>
                        <li>
                            While logging into the site is not an issue (there are several user accounts already), the creation function is still posing some issues. At this time, users are advised to skip sign-in unless they have an existing account.
                        </li>
                        <li>
                            There is now a help button that appears on pages that would have augmented reality or geo-location features. It is located in the badge toolbar.
                        </li>
                        <li>
                            Pages with only audio (and the accompanying text) now have an image from the trailer render to create visual interest.
                        </li>
                    </ul>

                    <p>Although this is a completed site, please remember that "Massacre in Melbourne" is a concept project, and that some features may not perform as expected.</p>
                </div>
            </Layout>
        </>
    )
}




// <!-- wp:embed {"url":"https://youtu.be/JujRv0PAk-Y","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
// <figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
// https://youtu.be/JujRv0PAk-Y
// </div></figure>

