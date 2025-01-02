This solution uses a combination of `Linking.getInitialURL` and `Linking.addEventListener` to ensure that deep links are handled reliably, even if the app is launched via deep link or `Linking.addEventListener` fails to trigger properly.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [deepLink, setDeepLink] = useState(null);

  useEffect(() => {
    const handleDeepLink = async (event) => {
      if (event.url) {
        setDeepLink(event.url);
      }
    };

    const initDeepLink = async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        setDeepLink(initialUrl);
      }
    };

    initDeepLink();
    const subscription = Linking.addEventListener('url', handleDeepLink);
    return () => subscription.remove();
  }, []);

  return (
    <View>
      {deepLink && (
        <Text>Deep link received: {deepLink}</Text>
      )}
    </View>
  );
}

export default App;
```