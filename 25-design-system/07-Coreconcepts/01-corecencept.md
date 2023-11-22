## Avatar
Avatars are used to show a thumbnail of a user photo or a visual representation of any other type of content.

- Image: Avatars should mask an image into their shape and work with any image size since they may get this image from unknown data sources.
- Image Fallback: There should be fallbacks when there’s no image available. This can be done with placeholder images or initials.
- Accessibility: Always provide a description for screen readers describing what’s displayed on the avatar image instead of just naming its role.
- Sizes: There are many contexts to use avatars and they all require different sizes for the component. For average projects use at least 2-3 different sizes and make sure there’s at least a small size available.
- Icon: Avatars can be used with an icon instead of an image to emphasize areas that don’t necessarily have (or need) an image associated with it.
- Background Colors: When used with icons or text, there has to be a background colour from the design system colour tokens applied to the avatar shape. Make sure that icons and text have enough contrast ratio with the background according to the WCAG AA standard.

## Banner
Banners display an actionable message used as a prominent way of communicating with your users.

- Appearance: Banners are used to display different types of messages and it’s important to differentiate their visual appearance based on the role they’re playing. If you’re using background colours for role differentiation, make sure there’s enough contrast ratio with the content according to the WCAG AA standard.
- Area for icons or images: Banners can supplement their message using a supporting icon or image. They shouldn’t be used instead of text content.
- Actions: Actions in banners should relate to its text and provide a way to react to the message sent to the user.
- Dismissible Action: Don’t overwhelm the user with banners on the page and include a dismissable action. That may be either a separate close button or one of the actions provided.
- Accessibility: If a banner dynamically appears on the page, it should be announced to the user by their assistive technology.
- Responsiveness: Banners should adapt to the viewport size. This usually means that they become full-width for mobile to save some space.

## Badge
Badges are elements that represent the status of an object or user input value.

- Appearance: Badges may play various roles in your product and having a predefined colour for each role should help users understand their meaning. When changing colours, make sure the text has enough contrast ratio with the background according to the WCAG AA standard.
- Dismissible Action: Badges can be used as a dynamic way to display selected values and there should be a way to dismiss them.
## Button
Buttons are interactive elements used for single-step actions.

- Hover State: Clearly show that the button is interactive when it gets hovered with a mouse cursor.
- Active State: Used when a button gets pressed. The same state can be used to represent the button responsible for toggling another element on the page while that element is visibly opened.
- Focused State: Used when a button gets selected through keyboard navigation.
- Icon Support: Icons easily communicate the purpose of the button when used next to its label or can be used without text when there’s not enough space. Make sure that the accessibility label is provided when used with an icon only.
- Disabled: Visually shows that a button is not interactive and restricts it from being pressed.
- Loading: Used when users have to wait for the result of their action after they press a button. If a spinner is used to display this state make sure that it’s not changing the original button width or height.
- Full Width: By default buttons take the width of their content, but they should also come with a full width variant that works well in mobile devices.
- Variants: When using multiple buttons, there should be a way to differentiate between primary and secondary actions. Buttons may play different roles for the user or be used on different types of surfaces and they have to change the way they look.
- Sizes: Buttons can be used in different areas of the website and may have multiple predefined sizes. On mobile, tappable areas have to be a minimum of 48px to be accessible according to iOS and Android accessibility guidelines.
## Card
Cards are used to group information about subjects and their related actions.

- Supports any type of content: Cards are one of the most used components in the product, so they have to be flexible enough to support any other components placed in them.
- Information structure: No matter how flexible cards are, it’s important for cards to have a specific structure for its elements for product consistency.
- Supports media sections: One of the most popular scenarios for using cards is mixing them with media content. The most popular options are having a full-width area on top of the content or full-height area at one of the card’s sides.
- Supplementary actions: Cards can be used with actions usually placed at the bottom of the card, or the card itself can be tappable and represent an action.
- Responsiveness: On mobile viewports cards are usually full-width in order to save space for the content.
## Carousel
Carousels stack the same type of items and allows scrolling through them horizontally.

- Navigation Controls: Carousels should have easy-to-find navigation controls for scrolling through content.
- Supports any content: Carousels can be used in different contexts and shouldn’t be limited to a specific child component. In some scenarios you might want items within the same carousel to differ from each other.
- Items width customisation: For simple products, it might be fine to use multiple predefined sizes for carousel items. For more flexibility, it’s good to provide a way to define a custom width.
- Touch events support: Carousels should be scrollable on touch devices. Some of the best practices are to use native scrolling and to make sure you’re supporting the same behaviour for all touch devices, not just mobile phones.
- Keyboard navigation: It should be possible to scroll through content with keyboard arrows when focused on navigation controls.
- Responsiveness: It’s good practice to hide or reduce the size of navigation controls for mobile viewports to improve the visibility of the content.

## Dropdown
Dropdowns are used to display a contextual subview with a list of actions or content related to the area where the dropdown is.

- Supports any type of content: Dropdowns may be used in a lot of contexts like date pickers, language selection or other product features.
- Action Menu: One of the most used scenarios for dropdowns is providing an action menu for the user, so it’s useful to have this layout defined.
- Focus Trapping: Once the dropdown’s opened, the focus should work only for elements inside the dropdown. When it’s closed, the focus should move to the dropdown trigger.
- Close Action: Either some actions inside the dropdown should close it or there should be a separate close button. Also, it’s good practice to close the dropdown when a user clicks outside.
- Keyboard Navigation: It should be possible to navigate through dropdown children elements with the keyboard and close it with an Esc key.
- Dynamic Position: Dropdown content should be displayed based on the current position of the trigger element on the screen and always visible to the user.
- Responsiveness: Dropdown content should be adapted for mobile viewpoints as it may take a lot of space on desktops.
## Icon
The icon component is a way to align the way iconography static assets are displayed in the product.

- Sizes: Icons should have a number of predefined sizes to provide a holistic experience across the product. Typography pairings may be used for these size values to ensure that they are aligned with the text sizes.
- Colors: Icons should be using values from the design system colour palette. Using parent element text colour for icon fill colour can make this automatic.
## Input Checkbox
An input checkbox is a form element used for selecting one or multiple options.

- Checked State: Used when the checkbox is selected and will use its value for the form submission.
- Disabled State: Prevents checkbox interactions and removes its value from the form submission.
- Intermediate State: Used when the checkbox has children selectable elements and only some of them are selected.
- Label: There should be a text label linked with the checkbox field. Clicking the label should also trigger the checkbox selection.
- Error State: The error state is used for form validation errors when the error is related to the checkbox field only. Always use a text error along with changing the colour of the field.
- Keyboard State: Checkbox selections should be triggered with the Space key. Using native elements for this should provide this kind of interaction out of the box.
- Checkbox Group: Checkboxes can be grouped to work with multiple values at the same time.
## Input Radio
An input radio is a form element used for selecting one option from a list.

- Checked State: Used when the radio is selected and will use its value for the form submission. A radio input can’t be unselected by pressing it again.
- Disabled State: Prevents radio interactions and removes its value from the form submission.
- Label: There should be a text label linked with the radio field. Clicking the label should also trigger the radio selection.
- Error State: The error state is used for form validation errors when the error is related to the radio field only. Always use a text error along with changing the colour of the field.
- Keyboard State: A radio selection should be triggered when the Space key is pressed. Using native elements for this should provide this kind of interaction out of the box.
- Radio Group: Radio inputs should always be used in a group. If one of them is selected, it can be deselected only by choosing another radio.
## Input Text
Input text lets users enter and edit text.

- Disabled State: Prevents input interactions and removes its value from the form submission.
- Placeholder: When there’s no value entered, show a placeholder with a potential value example. Don’t use placeholders as labels for the inputs.
- Label: There should be a text label linked with the text field. Clicking the label should move the focus to the field.
- Error State: The error state is used for form validation errors when the error is related to the text field only. Always use a text error along with changing the colour of the field.
- Focused State: The focused state should highlight the text field when users start to interact with it. There is always only one focused field in the form.
- Autocomplete: When applicable, adding support for the HTML autocomplete attribute will allow users to easily enter different data types.
- Icon Support: Icons are used to describe input methods, express a text field state or provide additional functionality.
## Input Switch
Input switches toggle the state of a single item. Compared to the input checkbox, their changes usually apply without any additional submission.

- Checked State: Used when an input switch is turned on. It’s better to provide an additional way to indicate the checked state besides changing its colour when applicable.
- Disabled State: Prevents interacting with an input switch.
- Label: There should be a text label linked with the switch field. Clicking the label should also trigger the input selection.
- Keyboard State: A switch selection should be triggered when the Space key is pressed.
## Textarea
Text area lets users enter and edit text.

- Disabled State: Prevents input interactions and removes its value from the form submission.
- Placeholder: When there’s no value entered, show a placeholder with a potential value example. Don’t use placeholders as labels for the inputs.
- Label: There should be a text label linked with the text field. Clicking the label should move the focus to the field.
- Error State: The error state is used for form validation errors when the error is related to the text field only. Always use a text error along with changing the colour of the field.
- Focused State: The focused state should highlight the text field when users start to interact with it. There is always only one focused field in the form.
## List
Lists define the layout of the page content or groups of elements stacking them vertically or horizontally.

- Support any type of content: Lists can be used in any context from page-level layout to managing offsets between granular components. hey should work with any component used inside.
- Horizontal Stacking: Lists can be used for inline elements and they have to manage how they’re stacked horizontally, including handling offsets between multiple rows of elements.
- Divided Variant: Lists with dividers are the best practice advised by many platform guidelines (especially on mobile).
- Supports Actionable Content: Sometimes lists are used for grouping tappable components, where the whole area of the list item should be clickable.
## Loading Indicator
The loading indicator shows that an operation’s being performed and how long the process will take.

- Linear and non-linear Variants: Depending on the context and the component it’s used for, the loading indicator can be represented either with linear or with a non-linear (e.g. circular) variant.
- Determinate or indeterminate wait time: In some cases, the wait time can’t be determined. The loading indicator should be shown until the loading finishes or an error happens. In other cases, it’s better to indicate how much time’s left until the loading is done.
- Light Variant: The loading indicator should respect its parent element background and provide a variant to be used on darker background colours.
- Reduced Motion: The loading indicator should be synced with the system motion settings and reduce its animation speed when reduced motion settings are turned on.
## Modal
Modals are containers appearing in front of the main content to provide critical information or an actionable piece of content.

- Supports any type of Content: Like any other container, modals can be used in different scenarios and you should be able to use it with any other component inside.
- Supplementary Actions: Since content in the modal may be actionable, it’s important to have an area for action elements. This area is usually located at the bottom of the modal container.
- Close Action: Modals should provide a clear way to be closed as they’re blocking content when open. This may be either a separate close button or one of the supplementary actions.
- Information Structure: Even though modals can be used as an empty container for the content, they need a defined information structure to provide a holistic experience. It may include defining how titles and subtitles look by default or where an action element’s area is.
- Keyboard Navigation Support: It should be possible to close a modal by pressing the Esc key and all the focusable elements inside the modal container should be accessible with keyboard navigation.
- Focus Trapping: Once a modal is opened, the focus should be moved to the first element inside the modal and should be looped within the modal container. Closing the modal should return the focus to the last focused element on the page.
## Tabs
Tabs organise navigation between multiple pages or content sections.

- Active Button State: There should be a clear differentiation between selected and unselected tab buttons.
- Button Icon Support: Icons help show the purpose of the tab buttons when used next to its label.
- Equally-sized tab buttons: Tabs can be used in a relatively small-sized container where you need to switch between a definite number of sections. For such scenarios, it’s better to support a variant where the button’s area is divided equally.
- Keyboard Navigation: All tab buttons should be focusable and navigation between the tab’s component should be accessible from the keyboard.
- Responsiveness: If all tabs on mobile don’t fit into the viewport, users should still have access to all tab buttons. Ways to solve this can be making the button area scrollable for mobile or showing a More button containing a dropdown with the rest of the buttons.
## Tooltip
Tooltips are desktop-only components that display additional information when hovering over or focusing on an element.

- Keyboard Hover Support: Tooltips should be accessible when an element is focused using the keyboard.
- Dynamic Positioning: Tooltip content should be displayed based on the current position of the trigger element on the screen and always visible to the user.
- Hover Timeout: Having a small timeout before triggering a tooltip will help to prevent occasionally showing tooltips while users move their mouse cursor.
- Light Variant: The tooltip should respect its parent element background and provide a variant to be used on darker background colours.
- Instant Transition for Element Groups: If there’s a group of elements using tooltips, hovering over another element while a tooltip’s already active shouldn’t trigger the animation.
