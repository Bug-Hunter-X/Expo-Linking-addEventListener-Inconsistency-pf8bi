# Expo Linking.addEventListener Inconsistency

This repository demonstrates a bug related to the inconsistent firing of `Linking.addEventListener` in Expo's `Linking` API.  The issue primarily manifests when the app is in the background or immediately after launch.  Deep links are intermittently missed, resulting in unexpected application behavior.

## Bug Description
The `Linking.addEventListener` method, designed to listen for incoming deep links, does not reliably trigger in all scenarios.  This leads to a failure to properly handle deep links, causing a disruption in the intended functionality.

## Reproduction Steps
1. Clone this repository.
2. Run the app using Expo Go or a similar Expo client.
3. Send a deep link to the application (e.g., via another app or manually using a browser).
4. Observe the app's response.  Inconsistent behavior indicates the presence of the bug.

## Solution
The solution involves implementing a more robust approach that utilizes both `Linking.addEventListener` and `Linking.getInitialURL` to capture deep links under all circumstances, ensuring functionality is maintained consistently. The solution handles the edge cases where `Linking.addEventListener` may fail.  The `Linking.getInitialURL` check is made on app launch, and the event listener handles subsequent deep links.