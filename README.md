# Sunway Pyramid Mall Finding Chatbot

A simple browser chatbot prototype for helping mall visitors find shops after scanning a QR code at an entrance or pillar.

## How to Use

Open `index.html` in a browser, then type a shop name such as:

- Adidas
- Uniqlo
- Starbucks
- TGV Cinemas
- Watsons
- Nike
- Sephora

The chatbot will show the shop location and step-by-step directions from the selected starting point.

After directions are shown, visitors can answer whether they found the shop:

- `Yes` replies with a thank-you message.
- `No` tells them to get help from the nearest information counter or mall staff.

## Adding Destination Pictures

Put image files in the project folder, for example inside an `images` folder. Then edit `script.js` and add the image path to a shop:

```js
image: "images/adidas.jpg",
```

If a shop has no image yet, the result card shows a placeholder space for the destination photo.

## Notes

The shop list is demo data for the prototype. Before using it publicly, replace the sample shops and directions with the latest official Sunway Pyramid directory information.
