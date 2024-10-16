import { useStyleToClass } from "../style-to-class-resolver";

export const MineSweeper = () => {
  const classes = useStyleToClass({
    grid: {
      place: "center",
      border: "sm",
      borderRadius: "md",
      padding: "lg",
      display: "flex-row",
      flexWrap: "wrap",
      className: "w-[200px]"
    },
    tile: {
      padding: "lg",
      border: "sm",
      borderRadius: "md"
    }
  });

  const getGridMap = () => {
    const tiles = 9;
    const totalBombs = 4;
    let bombCount = 0;

    const bombPlacement: number[] = [];

    const GridMap = new Map();

    const generateRandomTile = () => Math.floor(Math.random() * tiles);

    while (bombCount < totalBombs) {
      const tile = Number(generateRandomTile());

      if (!bombPlacement.includes(tile)) {
        bombPlacement.push(tile);
        bombCount++;
      }
    }

    for (let index = 0; index < tiles; index++) {
      GridMap.set(index, 0);
    }

    GridMap.forEach((value, key, map) => {
      bombPlacement.forEach((tile) => {
        if (key === tile) {
          map.set(key, 1);
        }
      });
    });

    return GridMap;
  };

  getGridMap();

  return (
    <div className="demo">
      <div className={classes.get("grid")}></div>
    </div>
  );
};
