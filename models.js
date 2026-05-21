// Lista de modelos 3D (GLB/GLTF) para exibir na galeria
// Adicione ou remova itens conforme seus próprios modelos
// Certifique-se de que os arquivos estejam na pasta 'models/' ou em uma URL pública

const modelsList = [
    {
        id: "calcita",
        name: "calcita",
        modelUrl: "/CalcitaPancakeBase.glb", // Exemplo público
        thumbnail: "/CalcitaPancakeBase.glb", // fallback
        format: "glb"
    },
    {
        id: "robot",
        name: "Robô Exploração",
        modelUrl: "https://threejs.org/examples/models/gltf/RobotExpressive.glb",
        thumbnail: "",
        format: "glb"
    },
    {
        id: "damaged_helmet",
        name: "Capacete Danificado",
        modelUrl: "https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf",
        thumbnail: "",
        format: "gltf"
    },
    {
        id: "lantern",
        name: "Lanterna Mágica",
        modelUrl: "https://threejs.org/examples/models/gltf/Lantern.glb",
        thumbnail: "",
        format: "glb"
    },
    {
        id: "cubecar",
        name: "Carro Estilizado",
        modelUrl: "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf/CesiumMan.glb",
        thumbnail: "",
        format: "glb"
    }
];

// Caso queira adicionar seus próprios modelos hospedados localmente, use:
// {
//     id: "meu_modelo",
//     name: "Meu Modelo",
//     modelUrl: "models/meu_arquivo.glb",  // coloque na pasta "models"
//     thumbnail: "images/thumb_meu_modelo.jpg",
//     format: "glb"
// }
