import fs from "fs";
import save from "../features/map/Layers/save.json" assert { type: "json" };

function editJson(area_id) {

  save.forEach((obj) => {
    obj.area_id = area_id;
  });
  fs.writeFileSync(
    "../features/map/Layers/save.json",
    JSON.stringify(save, null, 2)
  );
}
editJson(244)