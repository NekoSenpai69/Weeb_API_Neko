import neko from 'asurascans_scraper';

export async function asuraSearch(req, res) {
  try {
    let q = req.query.q;
    let page = req.query.page || 1;
    if (!q) return res.send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide Name!!",
    });
    let response = await neko.search(q, page);
    return await res.send({
      status: 200,
      creator:global.creator,
      response: "successful!!",
      data: response
    })
  } catch (error) {
    await res.send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!"
    })
  }
}

export async function asuraPopular(req, res) {
  try {
    let response = await neko.popular();
    return await res.send({
      status: 200,
      creator:global.creator,
      response: "successful!!",
      data: response
    })
  } catch (error) {
    await res.send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!"
    })
  }
}

export async function asuraPopularToday(req, res) {
  try {
    let response = await neko.popularToday();
    return await res.send({
      status: 200,
      creator:global.creator,
      response: "successful!!",
      data: response
    })
  } catch (error) {
    await res.send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!"
    })
  }
}

export async function asuraLastUpdate(req, res) {
  try {
    let page = req.query.page || 1;
    let response = await neko.lastUpdate(page);
    return await res.send({
      status: 200,
      creator,
      response: "successful!!",
      data: response
    })
  } catch (error) {
    await res.send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!"
    })
  }
}

export async function asuraEpDownloader(req, res) {
  try {
    let q = req.params.id;
    if (!q) return res.send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide Id!!",
    });
    let response = await neko.epDownloader(q);
    return await res.send({
      status: 200,
      creator,
      response: "successful!!",
      data: response
    })
  } catch (error) {
    await res.send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!"
    })
  }
}

export async function asuraDetails(req, res) {
  try {
    let q = req.params.id;
    if (!q) return res.send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide Id!!",
    });
    let response = await neko.details(q);
    return await res.send({
      status: 200,
      creator,
      response: "successful!!",
      data: response
    })
  } catch (error) {
    await res.send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!"
    })
  }
}

export async function asuraPdf(req, res) {
  try {
    let q = req.params.id;
    if (!q) return res.send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide Id!!",
    });
    let response = await neko.pdf(q);
    return await res.contentType("application/pdf")
      .status(200)
      .send(response)
  } catch (error) {
    await res.send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!"
    })
  }
}
