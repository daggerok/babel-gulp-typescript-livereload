import {render} from './modules/dom/Utils'
import Greeter1 from './modules/Greeter1'
import Greeter2 from './modules/Greeter2'
import {greeter3} from './modules/Greeter3'
import greeter4 from './modules/Greeter4'

render(Greeter1.greeter1)
render(Greeter2.greeter2)
render(greeter3)
render(greeter4)
render('<h1>uncomment this and test livereload</h1>')