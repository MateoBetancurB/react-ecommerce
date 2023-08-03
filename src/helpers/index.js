const truncateTitle = (title, numWords) => {
	const words = title.split(" ");
	return words.slice(0, numWords).join(" ");
};

export { truncateTitle };
