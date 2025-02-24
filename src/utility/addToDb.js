const getStoredReadList = () => {
  // read-list
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const adToStoredReadList = (id) => {
  const storedList = getStoredList();
  if (storedList.includes(id)) {
    // already exist. Do't add it
    console.log(id, "aready exist in the read list");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
  }
};

export { adToStoredReadList };
