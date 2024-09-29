function generateClassesFromStyleKeys(styleObject: StyleObj) {
  const { styleMaps: mapsObject, flexPositionMap } = useTestStyleMaps();
  const result: Record<string, string> = {};

  const payload = {
    ...styleObject
  };

  // TODO: using the test hook, see if this logic removes the empty obj
  console.log("before", { payload });

  for (const x in payload) {
    const keys = Object.keys(payload[x]);

    if (keys.length === 0) {
      delete payload[x];
    }
  }

  console.log("after", { payload });

  for (const childKey in payload) {
    if (Object.prototype.hasOwnProperty.call(payload, childKey)) {
      const classes = [];
      result[childKey] = "";

      const grandChild = payload[childKey];

      for (const grandChildKey in grandChild) {
        if (Object.prototype.hasOwnProperty.call(grandChild, grandChildKey)) {
          const gcKey = grandChildKey as StyleKeys;

          const grandChildValue = grandChild[gcKey];

          const mapKey = `${grandChildKey}Map`;

          if (gcKey === "flexPosition") {
            if (grandChild.flex) {
              const map = flexPositionMap[grandChild.flex];
              const mapValue = map[grandChildValue || "none"];
              classes.push(mapValue);
              break;
            }
          }

          if (gcKey === "className" || gcKey === "bg") {
            classes.push(grandChildValue);
            break;
          }

          const map = mapsObject[mapKey];
          const mapValue = map[grandChildValue || "none"];

          classes.push(mapValue);
        }
      }

      result[childKey] = classes.join(" ").trim();
      if (result[childKey].length === 0) {
        delete result[childKey];
      }
    }
  }

  return result;
}

export const useClasses = (style: StyleObj) => {
  return {
    classes: generateClassesFromStyleKeys(style)
  };
};
