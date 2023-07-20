// The colors range from lightest to darkest, 05 to 100.
//The values held within each color definition from 0-100 are HSLA values. The hue and saturation values come from each base-color variable, lightness is the percentage that's the second value, and alpha (opacity) is the last value. 
// This system changes the color by changing lightness, keeping alpha the same across shades.
// Read more about HSL: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl

export const colors = {
    /* Grey scale */
    //The two values represent hue and saturation
    "--base-grey": "223 15%",
    // This hsl function brings together hue and saturation with lightness and alpha
    "-white": "hsl(var(--base-grey) 100% / 1.0)",
    "-grey-10": "hsl(var(--base-grey) 90% / 1.0)",
    "-grey-20": "hsla(var(--base-grey) 80% / 1.0)",
    "-grey-30": "hsla(var(--base-grey) 70% / 1.0)",
    "-grey-40": "hsla(var(--base-grey) 60% / 1.0)",
    "-grey-50": "hsla(var(--base-grey) 50% / 1.0)",
    "-grey-60": "hsla(var(--base-grey) 40% / 1.0)",
    "-grey-70": "hsla(var(--base-grey) 30% / 1.0)",
    "-grey-80": "hsla(var(--base-grey) 20% / 1.0)",
    "-grey-90": "hsla(var(--base-grey) 10% / 1.0)",
    "-black": "hsla(var(--base-grey) 0% / 1.0)",
    /* Blue scale */
    "--base-blue": "222, 89%",
    "-blue-05": "var(--base-blue) 95% / 1.0)",
    "-blue-10": "var(--base-blue) 90% / 1.0)",
    "-blue-12": "var(--base-blue) 88% / 1.0)",
    "-blue-15": "var(--base-blue) 85% / 1.0)",
    "-blue-20": "var(--base-blue) 80% / 1.0)",
    "-blue-25": "var(--base-blue) 75% / 1.0)",
    "-blue-30": "var(--base-blue) 70% / 1.0)",
    "-blue-35": "var(--base-blue) 65% / 1.0)",
    "-blue-40": "var(--base-blue) 60% / 1.0)",
    "-blue-45": "var(--base-blue) 55% / 1.0)",
    "-blue-50": "var(--base-blue) 50% / 1.0)",
    "-blue-55": "var(--base-blue) 45% / 1.0)",
    "-blue-60": "var(--base-blue) 40% / 1.0)",
    "-blue-65": "var(--base-blue) 35% / 1.0)",
    "-blue-70": "var(--base-blue) 30% / 1.0)",
    "-blue-75": "var(--base-blue) 25% / 1.0)",
    "-blue-80": "var(--base-blue) 20% / 1.0)",
    "-blue-85": "var(--base-blue) 15% / 1.0)",
    "-blue-90": "var(--base-blue) 10% / 1.0)",
    "-blue-95": "var(--base-blue) 5% / 1.0)",
    /* Red scale */
    "--base-red": "0, 95%",
    "-red-05": "var(--base-red) 95% / 1.0)",
    "-red-10": "var(--base-red) 90% / 1.0)",
    "-red-15": "var(--base-red) 85% / 1.0)",
    "-red-20": "var(--base-red) 80% / 1.0)",
    "-red-25": "var(--base-red) 75% / 1.0)",
    "-red-30": "var(--base-red) 70% / 1.0)",
    "-red-35": "var(--base-red) 65% / 1.0)",
    "-red-40": "var(--base-red) 60% / 1.0)",
    "-red-45": "var(--base-red) 55% / 1.0)",
    "-red-50": "var(--base-red) 50% / 1.0)",
    "-red-55": "var(--base-red) 45% / 1.0)",
    "-red-60": "var(--base-red) 40% / 1.0)",
    "-red-65": "var(--base-red) 35% / 1.0)",
    "-red-70": "var(--base-red) 30% / 1.0)",
    "-red-75": "var(--base-red) 25% / 1.0)",
    "-red-80": "var(--base-red) 20% / 1.0)",
    "-red-85": "var(--base-red) 15% / 1.0)",
    "-red-90": "var(--base-red) 10% / 1.0)",
    "-red-95": "var(--base-red) 5% / 1.0)",
    "-red-100": "var(--base-red) 0% / 1.0)",
    /* Green scale */
    "--base-green": "88, 38%",
    "-green-05": "var(--base-green) 95% / 1.0)",
    "-green-10": "var(--base-green) 90% / 1.0)",
    "-green-15": "var(--base-green) 85% / 1.0)",
    "-green-20": "var(--base-green) 80% / 1.0)",
    "-green-25": "var(--base-green) 75% / 1.0)",
    "-green-30": "var(--base-green) 70% / 1.0)",
    "-green-35": "var(--base-green) 65% / 1.0)",
    "-green-40": "var(--base-green) 60% / 1.0)",
    "-green-45": "var(--base-green) 55% / 1.0)",
    "-green-50": "var(--base-green) 50% / 1.0)",
    "-green-55": "var(--base-green) 45% / 1.0)",
    "-green-60": "var(--base-green) 40% / 1.0)",
    "-green-65": "var(--base-green) 35% / 1.0)",
    "-green-70": "var(--base-green) 30% / 1.0)",
    "-green-75": "var(--base-green) 25% / 1.0)",
    "--green-80": "var(--base-green) 20% / 1.0)",
    "--green-85": "var(--base-green) 15% / 1.0)",
    "--green-90": "var(--base-green) 10% / 1.0)",
    "--green-95": "var(--base-green) 5% / 1.0)",
    /* Brown scale */
    "--base-brown": "18, 52%",
    "--brown-05": "var(--base-brown) 95% / 1.0)",
    "--brown-10": "var(--base-brown) 90% / 1.0)",
    "--brown-15": "var(--base-brown) 85% / 1.0)",
    "--brown-20": "var(--base-brown) 80% / 1.0)",
    "--brown-25": "var(--base-brown) 75% / 1.0)",
    "--brown-30": "var(--base-brown) 70% / 1.0)",
    "--brown-35": "var(--base-brown) 65% / 1.0)",
    "--brown-40": "var(--base-brown) 60% / 1.0)",
    "--brown-45": "var(--base-brown) 55% / 1.0)",
    "--brown-50": "var(--base-brown) 50% / 1.0)",
    "--brown-55": "var(--base-brown) 45% / 1.0)",
    "--brown-60": "var(--base-brown) 40% / 1.0)",
    "--brown-65": "var(--base-brown) 35% / 1.0)",
    "--brown-70": "var(--base-brown) 30% / 1.0)",
    "--brown-75": "var(--base-brown) 25% / 1.0)",
    "--brown-80": "var(--base-brown) 20% / 1.0)",
    "--brown-85": "var(--base-brown) 15% / 1.0)",
    "--brown-90": "var(--base-brown) 10% / 1.0)",
    "--brown-95": "var(--base-brown) 5% / 1.0)",
    /* Orange scale */
    "--base-orange": "28, 80%",
    "--orange-05": "var(--base-orange) 95% / 1.0)",
    "--orange-10": "var(--base-orange) 90% / 1.0)",
    "--orange-15": "var(--base-orange) 85% / 1.0)",
    "--orange-20": "var(--base-orange) 80% / 1.0)",
    "--orange-25": "var(--base-orange) 75% / 1.0)",
    "--orange-30": "var(--base-orange) 70% / 1.0)",
    "--orange-35": "var(--base-orange) 65% / 1.0)",
    "--orange-40": "var(--base-orange) 60% / 1.0)",
    "--orange-45": "var(--base-orange) 55% / 1.0)",
    "--orange-50": "var(--base-orange) 50% / 1.0)",
    "--orange-55": "var(--base-orange) 45% / 1.0)",
    "--orange-60": "var(--base-orange) 40% / 1.0)",
    "--orange-65": "var(--base-orange) 35% / 1.0)",
    "--orange-70": "var(--base-orange) 30% / 1.0)",
    "--orange-75": "var(--base-orange) 25% / 1.0)",
    "--orange-80": "var(--base-orange) 20% / 1.0)",
    "--orange-85": "var(--base-orange) 15% / 1.0)",
    "--orange-90": "var(--base-orange) 10% / 1.0)",
    "--orange-95": "var(--base-orange) 5% / 1.0)",
    /* Yellow scale */
    "--base-yellow": "52, 94%",
    "--yellow": "var(--base-yellow) 94% / 1.0)",
    "--yellow-05": "var(--base-yellow) 95% / 1.0)",
    "--yellow-10": "var(--base-yellow) 90% / 1.0)",
    "--yellow-15": "var(--base-yellow) 85% / 1.0)",
    "--yellow-20": "var(--base-yellow) 80% / 1.0)",
    "--yellow-25": "var(--base-yellow) 75% / 1.0)",
    "--yellow-30": "var(--base-yellow) 70% / 1.0)",
    "--yellow-35": "var(--base-yellow) 65% / 1.0)",
    "--yellow-40": "var(--base-yellow) 60% / 1.0)",
    "--yellow-45": "var(--base-yellow) 55% / 1.0)",
    "--yellow-50": "var(--base-yellow) 50% / 1.0)",
    "--yellow-55": "var(--base-yellow) 45% / 1.0)",
    "--yellow-60": "var(--base-yellow) 40% / 1.0)",
    "--yellow-65": "var(--base-yellow) 35% / 1.0)",
    "--yellow-70": "var(--base-yellow) 30% / 1.0)",
    "--yellow-75": "var(--base-yellow) 25% / 1.0)",
    "--yellow-80": "var(--base-yellow) 20% / 1.0)",
    "--yellow-85": "var(--base-yellow) 15% / 1.0)",
    "--yellow-90": "var(--base-yellow) 10% / 1.0)",
    "--yellow-95": "var(--base-yellow) 5% / 1.0)",
  };
  