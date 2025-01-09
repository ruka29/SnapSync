import AlbumButton from "./AlbumButton";

export default function AlbumGrid() {
  const albums = [
    { id: 1, title: "Camera", icon: "album_icon.png" },
  ];

  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-10 p-4">
      {albums.map((album) => (
        <AlbumButton key={album.id} title={album.title} />
      ))}

      <AlbumButton label="Add New Album" isAddButton={true} />
    </div>
  );
}
