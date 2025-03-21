/*
 * https://github.com/Prakhar-002
 * @copyright Prakhar-002
*/

/*
? Node modules
*/
import { useNavigation, useNavigate, useLoaderData, useParams, useSubmit } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import PropTypes from "prop-types"

/*
? Custom modules
*/
import logout from "../utils/logOut"
import deleteConversation from "../utils/deleteConversation"

/*
? Custom hooks
*/
import { useToggle } from "../hooks/useToggle"



/*
? Components
*/
import { IconBtn } from "./Button"
import Avatar from "./Avatar"
import Menu from "./Menu"
import MenuItem from "./MenuItem"
import { LinearProgress } from "./Progress"
import Logo from "./Logo"



const TopAppBar = ({ toggleSidebar }) => {
      // — useNavigation: Provides navigation state (loading, idle, submitting, etc.)
      const navigation = useNavigation();

      // — use ate: Function for programmatically navigating between routes.
      const navigate = useNavigate();

      /*
      — conversations: Array containing att conversation data.

      — user: User data for the currently logged—in user.
      */
      const { conversations, user } = useLoaderData();

      // params Object containing URL parameters, including the conversationId.
      const params = useParams();

      /*
      - Obtain the useSubmit hook for handling form submissions:

      — submit: Function for submitting forms and triggering server—side actions.
      */
      const submit = useSubmit();

      /*
      * Use a custom hook to manage the menu 's show state.

      * 'showMenu' holds the current state,

      * and 'setShowMenu' is a function to toggle the menu.
      */
      const [showMenu, setShowMenu] = useToggle();

      /*
      * Check if the current navigation state is 'loading' and if there is no form data associated with the navigation.

      * This condition typically signifies a normal page load,

      * where the page is loading for the first time or is being reloaded without submitting a form.
      */

      const isNormalLoad = navigation.state === 'loading' && !navigation.formData;

      console.log(params.conversationId);
      

      return (
            <header className="relative flex justify-between items-center h-16 px-4">
                  <div className="flex items-center gap-1">
                        <IconBtn
                              icon='menu'
                              title='Menu'
                              classes="lg:hidden"
                              onClick={toggleSidebar}
                        />

                        <Logo classes="lg:hidden" />
                  </div>

                  {params.conversationId && (
                        <IconBtn
                              icon='delete'
                              classes="ms-auto me-1 lg:hidden"
                              onClick={() => { 
                                    // Find the current conversation title
                                    const { title } = conversations.documents.find(({ $id }) => params.conversationId === $id);

                                    deleteConversation({
                                          id: params.conversationId,
                                          title,
                                          submit
                                    })
                              }}
                        />
                  )}

                  <div className="menu-wrapper">
                        <IconBtn onClick={setShowMenu}>
                              <Avatar name={user.name} />
                        </IconBtn>

                        <Menu classes={showMenu ? 'active' : ''}>
                              <MenuItem labelText='Log out' onClick={() => logout(navigate)} />
                        </Menu>
                  </div>

                  <AnimatePresence >
                        {isNormalLoad && (
                              <LinearProgress classes="absolute top-full left-0 right-0 z-10" />
                        )}
                  </AnimatePresence>

            </header>
      )
}

TopAppBar.propTypes = {
      toggleSidebar: PropTypes.func
}

export default TopAppBar