import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfCopyOfBlankScreen29471Navigator from '../features/CopyOfCopyOfBlankScreen29471/navigator';
import BlankScreen29470Navigator from '../features/BlankScreen29470/navigator';
import BlankScreen19469Navigator from '../features/BlankScreen19469/navigator';
import BlankScreen39468Navigator from '../features/BlankScreen39468/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfCopyOfBlankScreen29471: { screen: CopyOfCopyOfBlankScreen29471Navigator },
BlankScreen29470: { screen: BlankScreen29470Navigator },
BlankScreen19469: { screen: BlankScreen19469Navigator },
BlankScreen39468: { screen: BlankScreen39468Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
