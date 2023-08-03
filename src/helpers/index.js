const truncateTitle = (title, numWords) => {
	const words = title.split(" ");
	return words.slice(0, numWords).join(" ");
};

const randomId = () => {
	const random = Math.random().toString(36).substring(2);
	const date = Date.now().toString(36);
	return random + date;
};

const formatDate = (date) => {
	const newDate = new Date(date);
	const options = {
		year: "numeric",
		month: "short",
		day: "2-digit",
	};
	return newDate.toLocaleDateString("es-ES", options);
};

export { truncateTitle, randomId, formatDate };
