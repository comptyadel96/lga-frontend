import React from "react"

function BlogCard({
  title = "Titre du blog",
  auteur = "auteur du blog",
  description,
  imageUrl = "/images/contact.png",
  date = "01/02/2022",
}) {
  return (
    <div className="flex flex-col items-center bg-white md:px-4 md:py-2 px-2 py-1 relative shadow-lg ">
      <h1 className="md:text-4xl text-2xl font-semibold text-gray-700">
        {title}
      </h1>

      <img alt={title} src={imageUrl} className="md:max-h-64 md:mt-3 object-cover" />
      <h1 className="md:max-w-3xl max-w-xs truncate text-gray-500">
        {/* {description} */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
        temporibus iste. Commodi quisquam neque vitae deleniti earum et officiis
        eius rem, rerum blanditiis itaque dignissimos saepe modi atque incidunt
        optio....
      </h1>
      <h1 className="text-blue-400 md:text-lg">
        Auteur: <span className="text-gray-500">{auteur}</span>{" "}
      </h1>
      <p className="text-blue-400 md:text-lg">
        Publier le <span className="text-gray-500">{date}</span>
      </p>
    </div>
  )
}

export default BlogCard
