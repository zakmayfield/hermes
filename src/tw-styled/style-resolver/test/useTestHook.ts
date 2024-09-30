// main styles object
type Foo = "bar" | "baz";
type Doo = "daa" | "loo";

type ParentObject = {
  foo?: Foo;
  doo?: Doo;
};

type ParentKeys = keyof ParentObject;

// style maps
type Maps = Record<string, Record<string, string>>;

const mapsObject: Maps = {
  fooMap: {
    none: "",
    bar: "bar",
    baz: "baz"
  },

  dooMap: {
    none: "",
    daa: "daa",
    loo: "loo"
  }
};

// style prop object
type ChildObject = Record<string, ParentObject>;

const childObject: ChildObject = {
  banana: { foo: "bar", doo: "loo" },
  poopoo: {},
  peepee: { doo: "loo" }
};

function generateClassesFromStyleKeys(styleObject?: StyleObj) {
  const { styleMaps: mapsObject, flexPositionMap } = useTestStyleMaps();
  const result: Record<string, string> = {};

  for (const childKey in styleObject) {
    if (Object.prototype.hasOwnProperty.call(styleObject, childKey)) {
      const classes = [];
      result[childKey] = "";

      const grandChild = styleObject[childKey];
      const styleObjectKeys = Object.keys(grandChild);

      // if (styleObjectKeys.length === 0) {
      //   break;
      // }

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

  console.log({ result });
  return result;
}

export const useTestClasses = (style?: StyleObj) => {
  return {
    classes: generateClassesFromStyleKeys(style)
  };
};
