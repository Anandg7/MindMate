import React from 'react'
import help from './Images/help.png'

export default function Home() {
  return (
    <div>
      <div class="py-12">
        <h2 class="text-5xl font-bold  flex justify-center font-mono  py-8">How Can We Help You</h2>
        <p class="text-center font-serif text-3xl">We provide free mental health support
            and psychological counselling to all those who need
            it. You can call or WhatsApp from anywhere in India at any hour of the day or night.</p>
        <div class="justify-center flex py-8">
            <div class="flex flex-wrap justify-left ml-12 py-8  ">
                <div class=" card">
                    <p class="card-title">Custom ChatBot</p>
                    <p class="small-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                        veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                        officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                        eum nihil itaque!
                    </p>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </div>
                <div class="card">
                    <p class="card-title">Quizz</p>
                    <p class="small-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                        veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                        officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                        eum nihil itaque!
                    </p>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap justify-left py-8">
                <div class=" card">
                    <p class="card-title">Community Section</p>
                    <p class="small-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                        veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                        officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                        eum nihil itaque!
                    </p>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </div>
                <div class="card">
                    <p class="card-title"> Journaling</p>
                    <p class="small-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                        veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                        officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                        eum nihil itaque!
                    </p>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </div>
            </div>
            <div>
                <img src={help} id="yoga" class="py-8"/>
            </div>
        </div>

    </div>
    <div class="py-17 mx-9">
        <h1 class="text-5xl font-bold  flex justify-center font-mono  py-8">TestiMonials</h1>

        <div
            class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800 ">
            <figure
                class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700 ">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Very easy to use and good content
                        provide</h3>
                    <p class="my-4">If you care for your Mental Health, I hands down would go with this."</p>
                </blockquote>
                <figcaption class="flex items-center justify-center ">
                    <img class="rounded-full w-9 h-9"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                        alt="profile picture"/>
                    <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div>Bonnie Green</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400 ">Student at Mit</div>
                    </div>
                </figcaption>
            </figure>
            <figure
                class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Solid support for any Query</h3>
                    <p class="my-4">Their Customer Support is Awesome . Guides Pretty Well"</p>
                </blockquote>
                <figcaption class="flex items-center justify-center ">
                    <img class="rounded-full w-9 h-9"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                        alt="profile picture"/>
                    <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div>Roberta Casas</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Lead designer at Meta</div>
                    </div>
                </figcaption>
            </figure>
            <figure
                class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Best Service Outthere</h3>
                    <p class="my-4">The Website is Very Well Disgned And it is Very user freindly"</p>
                </blockquote>
                <figcaption class="flex items-center justify-center ">
                    <img class="rounded-full w-9 h-9"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                        alt="profile picture"/>
                    <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div>Jese Leos</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Microsoft</div>
                    </div>
                </figcaption>
            </figure>
            <figure
                class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                    <p class="my-4">The Integration Of ChatBot Helps Alot"</p>
                </blockquote>
                <figcaption class="flex items-center justify-center ">
                    <img class="rounded-full w-9 h-9"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                        alt="profile picture"/>
                    <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div>Joseph McFall</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">CTO at Google</div>
                    </div>
                </figcaption>
            </figure>
        </div>


    </div>
    <div></div>
    </div>
  )
}
