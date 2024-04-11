"use server";

export async function getAllUsers() {
  const response = fetchRequest("users", "GET");
  const data = (await response).json();
  return data;
}

export async function getTweets() {
  const response = fetchRequest("tweets", "GET");
  const data = (await response).json();
  return data;
}

export async function createUserTweet<T>(payload: T) {
  await fetchRequest("tweets", "POST", payload);
}

export async function getCampaign(): Promise<Campaign> {
  const response = fetchRequest("campaign", "GET");
  const data = (await response).json();
  return data;
}

export async function updateCampaign<T>(payload: T) {
  await fetchRequest("campaign", "POST", payload);
}

const fetchRequest = async <T>(
  endpoint: string,
  method: string,
  dataRequest?: T
) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/${endpoint} `, {
    body: dataRequest && JSON.stringify(dataRequest),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    method: method,
  });
  return response;
};
