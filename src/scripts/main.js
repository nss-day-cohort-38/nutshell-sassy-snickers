import events from './tasks/eventListeners.js'
import eventEventListeners from "./events/eventListeners.js"
import render from './tasks/render.js'

/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/

const message = `Time to build an application that gives you all the information you need in a Nutshell Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem deleniti accusantium quasi ab ad officia cupiditate sed aliquam nobis expedita velit dolorum perspiciatis pariatur nam vero et magnam soluta tempora!

Eveniet deserunt consequatur porro molestiae nulla optio quis totam libero iste nemo odit eum facilis sapiente. Harum similique cupiditate voluptas ea optio sunt molestias eius ab qui obcaecati nesciunt id?

Necessitatibus delectus sint vitae eos quasi optio esse dignissimos enim laborum ipsum harum perspiciatis eaque. Magnam fugiat delectus neque laboriosam in accusamus a veniam inventore asperiores consequatur nihil quae quo.

Eligendi quaerat nesciunt sint nobis qui? Temporibus maiores esse molestiae hic cum culpa sed recusandae dolore sequi modi. Quos illum debitis odio consequatur voluptatum error aliquam rem similique officia recusandae.

Ex suscipit earum reiciendis eaque dolorem inventore accusantium modi voluptatum saepe cum quam tempora autem corrupti illum deleniti iure rerum mollitia quo ducimus soluta ea! Illum aliquid consectetur vitae quod?

Minus rem tempora quo. Deleniti mollitia dignissimos laborum quis quos facilis dolore soluta error provident recusandae veniam minus consequatur blanditiis. Facere tempore praesentium soluta fugiat quia eligendi dolores ullam doloribus!

Aut nulla perferendis officiis accusamus ut aspernatur hic possimus amet blanditiis incidunt repudiandae ullam inventore ipsam recusandae nihil provident facilis totam quibusdam natus eligendi optio quia sapiente rerum quos illo?

Porro soluta nisi impedit voluptatem ex accusantium facilis amet quod blanditiis quia similique totam enim id ratione minus quo modi sequi nam dicta iste aliquid itaque velit accusamus quibusdam consequuntur.

Ab assumenda in ad nesciunt recusandae labore voluptates vero suscipit tenetur ullam sint beatae odio harum quo aperiam quas temporibus pariatur consectetur saepe eveniet minus voluptatem atque iusto similique repudiandae?

In enim odit repellat maxime harum eum expedita fuga vel eaque quaerat optio hic sapiente eveniet neque dolorum eligendi pariatur possimus aliquid minus officiis mollitia quia voluptates sunt nulla est!`

document.querySelector("#containerOne").innerHTML = `<h1>${message}</h1>`

eventEventListeners.openEvents()


render.renderAllTasks()
events.addSaveBtnListener()

