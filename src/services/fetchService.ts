"use server";

export async function getUsers() {
  const res = fetchRequest("users/all", "GET");

  return res;
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
