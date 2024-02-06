Navigation Function
1. navigation.navigate('RouteName') pushes a new route to the native stack navigator if it's not already in the stack, otherwise it jumps to that screen.
2. We can call navigation.push('RouteName') as many times as we like and it will continue pushing routes.
3. The header bar will automatically show a back button, but you can programmatically go back by calling navigation.goBack(). On Android, the hardware back button just works as expected.
4. You can go back to an existing screen in the stack with navigation.navigate('RouteName'), and you can go back to the first screen in the stack with navigation.popToTop().
5. The navigation prop is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route).