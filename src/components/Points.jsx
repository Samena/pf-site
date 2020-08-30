import React from "react";
import './styles.css';

export const Points = () => (
    <div>
        <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
        >
            <input type="hidden" name="cmd" value="_s-xclick"></input>
            <input
                type="hidden"
                name="hosted_button_id"
                value="HKHVK22Z5T96U"
            ></input>

            <table>
                <tr>
                    <td>
                        <input className="pointsButton" type="hidden" name="on0" value="Buy Points" />
                        Buy Points
                    </td>
                </tr>
                <tr>
                    <td>
                        <select name="os0">
                            <option value="100 points @ 1.70 + VAT">
                                100 points @ 1.70 + VAT £170.00 GBP
                            </option>
                            <option value="150 points @ £1.60 + VAT">
                                150 points @ £1.60 + VAT £240.00 GBP
                            </option>
                            <option value="250 points @ 1.50 + VAT">
                                250 points @ 1.50 + VAT £375.00 GBP
                            </option>
                            <option value="500 points @ 1.20 + VAT">
                                500 points @ 1.20 + VAT £600.00 GBP
                            </option>
                        </select>{" "}
                    </td>
                </tr>
            </table>
            <input type="hidden" name="currency_code" value="GBP"></input>
            <input
                type="image"
                src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif"
                border="0"
                name="submit"
                className="pointsButton"
                alt="PayPal – The safer, easier way to pay online."
            ></input>
            <img
                alt=""
                border="0"
                src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
                width="1"
                height="1"
            />
        </form>
    </div>
);
