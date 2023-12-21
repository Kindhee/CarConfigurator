import templateJson from "../template.3dverse.js";

/** @typedef {keyof (typeof templateJson.assets)} AssetKey */

const assetIds = Object.entries(templateJson.assets).reduce(
  (assetIds, [name, { asset_id }]) => {
    assetIds[/** @type {AssetKey} */ (name)] = asset_id;
    return assetIds;
  },
  /** @type {Record<AssetKey, string>} */ ({}),
);

export const config = {
  // This public user token gives any app user read-only access to the scene.
  // Read-only access still permits temporary changes to the scene graph,
  // within the context of a session, and these changes will be synced with
  // other users connected to the same session. However the changes will not
  // be persisted.
  publicUserToken: templateJson.publicToken,
  sceneUUID: assetIds.SceneCarConfigurator,
  isAnimationActiveTokenEntityName: "isAnimationActiveToken",
  carSceneRefName: "Car",
  rimSceneRefName: "1e50d7d4-74c7-4b52-b9ce-2519604bcadf",
  // the cubemaps are from an external project that won't be copied so
  // we don't include their UUIDS in the template config
  colorChoices: /** @type {[number, number, number][]} */ ([
    [0, 0, 0],
    [1, 1, 1],
    [0, 0.035, 0.29],
    [0.58, 0.141, 0.506],
    [0.251, 0, 0],
  ]),
  materials: [
    {
      name: "Metallic",
      matUUID: assetIds.MaterialMetallic,
    },
    {
      name: "Solid",
      matUUID: assetIds.MaterialSolid,
    },
    {
      name: "Matte",
      matUUID: assetIds.MaterialMatte,
    },
  ],
  rims: [
    {
      name: "Mansory Rims",
      price: 10000,
      sceneUUID: assetIds.SceneMansoryRims,
    },
    {
      name: "Rocket Rims",
      price: 10000,
      sceneUUID: assetIds.SceneRocketRims,
    },
    {
      name: "Mercedes Rims",
      price: 10000,
      sceneUUID: assetIds.SceneMercedesRims,
    },
  ],
  cars: [
    {
      name: "Mercedes Class G",
      price: 750000,
      sceneUUID: assetIds.SceneMercedesGclass,
      paintMaterialUUID: assetIds.MaterialGclassPaint,
      headLightsMatUUID: assetIds.MaterialMercedesHeadlights,
      rearLightsMatUUID: assetIds.MaterialMercedesRearlights,
    },
  ],
  rotationAnimationSequenceUUID:
    templateJson.assets.AnimationSequenceRotation.asset_id,
};
