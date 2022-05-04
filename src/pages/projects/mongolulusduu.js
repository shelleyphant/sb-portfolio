import React from 'react'
import Layout from '../../components/Layout'

export default function mongolulusduu() {
    return (
        <>
            <Layout>
                <div className='content'>
                    <h2>Mongol Ulus Duu</h2>

                    <p>"Mongol Ulus Duu" (Mongolia Song) is an iPad app / sound module based around and inspired by the instruments found within traditional Mongolian music culture.</p>


                    <p>Each of the 18 unique loops was created in GarageBand from a combination of preset loops and user defined patterns. Most of the percussion is layered from a variety of instruments to make a full sound.</p>

                    <p>The aim was to emulate a sound that was inspired by the Mongolian instruments. GarageBand has limited "Middle Eastern" presets, so many of the loops were synthesised using edited western instruments, then layered together to create each individual clip for Unity.</p>

                    <p>We worked in an 8 bar loop, with most of the single loops being 2 or 4 bars. This meant that when the sounds were grouped before export, some interesting effects and fills could be achieved. This helped to make a more authentic sounding module.</p>

                    <p>The iPad app has been converted into a WebGL API. It is available for interraction below. Unity WebGL is still in development, and sometimes the applet does not behave as expected. If the visuals or sounds seem out of place or sync, try refreshing the page. Please note that mobile and Internet Explorer users may have a different experience.</p>

                    {/* Add 'if mobile' selector */}
                    <div class="iframe-box"><iframe title='Mongol Ulus Duu' className="webgl" src="https://shelleyphant.com/bonus-content/mongol_ulus_duu/" width="300" height="150"></iframe></div>
                </div>
            </Layout>
        </>
    )
}
