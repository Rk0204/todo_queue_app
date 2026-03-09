const queue = [];

function processQueue() {
  if (queue.length === 0) return;

  const job = queue.shift();

  console.log("Processing job:", job.id);

  setTimeout(() => {
    job.handler();
    console.log("Job completed:", job.id);
  }, 2000);
}

setInterval(processQueue, 1000);

function addDeleteJob(id, handler) {
  queue.push({
    id,
    handler,
  });
}

module.exports = { addDeleteJob };