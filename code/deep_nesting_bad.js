function do_stuff() {
  // ...
  if (is_writable(folder)) {
    if (fp = fopen(file_path,'w')) {
      if (stuff = get_some_stuff()) {
        // ... 
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}
